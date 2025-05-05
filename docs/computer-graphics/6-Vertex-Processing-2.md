# 6 - Vertex Processing 2

## Outline

- Projection Transformation
  - Orthographic Projection
  - Perspective Projection

- Viewport Transformation

# Projection Transformation

## Projection Transformation

- View space → NDC (normalized device coordinate system)로 변환
- 수식:  
  ```
  p_c = P * p_v
  ```
  여기서  
  - `p_v`: view space 좌표  
  - `P`: projection matrix  
  - `p_c`: clip space (또는 NDC space) 좌표

## Recall that...

- 1. 객체 배치  
  → Modeling transformation
- 2. "카메라" 배치  
  → Viewing transformation
- 3. **"렌즈" 선택**
  → **Projection transformation**
- 4. "스크린"에 출력  
  → Viewport transformation

## Recall: OpenGL Clip Space

- Clip Space에서는 x, y, z 좌표가 -1에서 1까지인 cube 공간 안에 객체를 그릴 수 있음
- 이 공간의 xy 평면이 2D **viewport** 역할을 함
- 이 좌표계는 **normalized device coordinate (NDC)** 라고 불림

## Normalized Device Coordinates (NDC)

- **Normalized device coordinates (NDC)**는 장치 독립적인 디스플레이 좌표계이다
  - 픽셀 크기, 해상도 등이 다른 다양한 디스플레이 장치에서도 프로그램이 동일하게 동작하게 하려면  
    **정규화된 좌표계**가 필요하다

- 이 좌표계에서의 공간을 **clip space** 또는 **NDC space**라고도 부른다
  - 단, clip space와 NDC space는 약간의 차이가 있으므로  
    이는 이번 강의에서 자세히 다룸

## Canonical View Volume

- **Canonical view volume**은 NDC 공간 내의 3차원 볼륨이며, 화면에 표시될 수 있는 장면의 영역을 정의한다.
- OpenGL 기준: `[-1, 1]^3` 범위  
- Direct3D 기준: `[0, 1]` 범위 (z축만 다름)
- canonical view volume 안에 있는 객체만 렌더링된다.
  - 카메라 뷰 안에 있는 객체만 그려짐
  - 너무 멀거나 너무 가까운 객체는 제외됨

## Canonical View Volume

- 관례적으로 NDC는 **left-handed** 좌표계임 (OpenGL과 Direct3D 모두)
  - NDC에서 **+z 방향**이 화면 방향
- OpenGL의 projection 함수는 자동으로 좌표계 손잡이(handedness)를 바꿔줌 → **world/model space는 right-handed**
  - View direction in view space: -z 방향
  - Direct3D는 기본적으로 left-handed system을 사용하나, 이 변경을 하지 않음

## View Volume

- View space에서는 객체를 꼭 `[-1, 1]` 범위 안에 배치할 필요는 없다.
- 대신, 원하는 크기의 직육면체(cuboid)나 frustum 형태의 volume을 설정하고 그 안에 객체를 배치할 수 있다.
- 이 view volume (및 그 안의 모든 객체)은 **canonical view volume in NDC space**로 투영된다.

→ **Projection transformation**

## Projection Transformation

- CG에서의 Projection이란: **3D 좌표를 2D 화면 좌표로 매핑**하는 것
- 수행 순서:
  - 3D 공간상의 arbitrary view volume → canonical view volume으로 매핑  
  → **Projection transformation**
  - canonical view volume의 z=1 평면에 투영 (실제로 그렇게 되진 않지만, 개념적으로는 깊이(depth)를 따로 유지)
- 투영 변환 방식은 크게 2가지:
  - Orthographic projection
  - Perspective projection

## Orthographic (Orthogonal) Projection

- View volume: 직육면체 (cuboid)
- Orthographic projection: 직육면체 view volume을 canonical view volume로 매핑
  - Scaling + Translation 조합
  - → **Windowing transformation**

## Windowing Transformation

- 사각형 공간 내 점 `(p_x, p_y)`을 다른 사각형 공간의 대응 점 `(p_x', p_y')`로 매핑하는 변환
  - 예: `(x_l, y_l)` ~ `(x_r, y_r)` → `(x_l', y_l')` ~ `(x_r', y_r')`

수식:

```
p'_x = ((p_x - x_l) / (x_r - x_l)) * (x_r' - x_l') + x_l'
p'_y = ((p_y - y_l) / (y_r - y_l)) * (y_r' - y_l') + y_l'
```

## Orthographic Projection Matrix

- 3D까지 확장하고, 다음과 같이 대입:

```
x_r = right, x_l = left
y_t = top, y_b = bottom
z_f = far, z_n = near

P_orth = 
| 2/(x_r - x_l)   0               0              -(x_r + x_l)/(x_r - x_l) |
| 0              2/(y_t - y_b)   0              -(y_t + y_b)/(y_t - y_b) |
| 0              0              -2/(z_f - z_n)  -(z_f + z_n)/(z_f - z_n) |
| 0              0               0               1                       |
```

## Examples of Orthographic Projection

- Orthographic 및 등각(isometric) 투영 예시
- **객체는 카메라로부터의 거리와 무관하게 항상 동일한 크기로 보임**

## Properties of Orthographic Projection

- 사실적으로 보이지 않음
- **정확한 측정**에 적합
- CAD, 건축 도면 등에서 가장 일반적으로 사용됨
  - 정확한 측정이 중요한 환경
- Scaling과 Translation의 조합  
  → **Affine transformation**

## [Demo] Orthographic Projection

- 슬라이더를 움직이며 왼쪽(view volume)과 오른쪽(rendered view)을 관찰
- 왼쪽, 오른쪽, 아래, 위, 가까움, 멀리 위치를 조절 가능

## Quiz 1

## Perspective Effects

- 멀리 있는 객체는 작게 보임

**Vanishing point**:  
- 투시 그림법에서 **평행선이 수렴해 보이는 점**
- 평면 투시에서 원근감을 부여하는 핵심 요소

## Perspective Projection

- View volume: **Frustum (절두체)**
  → "Viewing frustum"
- Perspective projection: Viewing frustum을 canonical view volume로 매핑

- 정점들을 canonical view volume로 비선형적으로 매핑
  → 깊이에 따른 왜곡 효과 생성

## Why does this mapping generate a perspective effect?

- 원래 3D 장면에서 카메라 기준으로 멀어질수록 z값 증가
- canonical 공간으로 투영할 때 z에 따라 비선형적으로 축소됨
- **가까운 객체는 크게, 먼 객체는 작게** 투영됨  
  → 이것이 perspective 효과의 본질

## An Example of Perspective Projection

**After perspective projection**  
- Frustum 내에 있는 객체들이 canonical 공간에 비선형적으로 압축됨
- 카메라에 가까운 객체는 더 크게, 멀리 있는 객체는 더 작게 보임

## An Example of Perspective Projection

- Canonical 공간의 결과를 2D 화면에 표시
- 수평 방향: 1024px  
- 수직 방향: 768px
- 카메라의 viewport 내에 객체들이 깊이에 따라 달리 표현됨

## Let's first consider 3D View Frustum → 2D Projection Plane

- 3D 점을 카메라 평면에 투영하는 과정을 고려해보자

## Perspective projection

- 화면 위의 객체 크기는 **카메라로부터의 거리**에 반비례함

- 유사한 삼각형의 성질:
  ```
  y' / d = y / -z
  ⇒ y' = -d·y / z
  ```

## Homogeneous coordinates revisited

- Perspective는 나눗셈 연산이 필요함
  - 이는 **Affine transformation에는 포함되지 않음**
- Affine에서는 평행선이 평행하게 유지됨
  - 따라서 소실점 없음
  - 뷰포인트로 수렴하는 광선도 없음
- **Homogeneous coordinates의 본래 목적은 투영 구현**에 있음

## Homogeneous coordinates revisited

- `w = 1` 좌표를 자리 표시자로 도입
  - translation을 선형 변환과 통합하는 데 편리
- 임의의 w도 허용 가능:
  ```
  [x  ]      [kx  ]
  [y  ]  ~   [ky  ]
  [z  ]      [kz  ]
  [w  ]      [kw  ]
  ```
  - 4D 벡터의 **스칼라 배수는 동일한 좌표로 간주**

## Perspective projection

- 투영 평면에 투영하려면, z를 w로 옮겨서 다음과 같이 변환:

  ```
  [x']   = [-d·x/z]     [dz  0   0   0 ]   [x]
  [y']     [-d·y/z]  =  [0  dz   0   0 ] * [y]
  [ 1 ]     [   1 ]     [0   0   0  -1 ]   [z]
                         [0   0   1   0 ]   [1]
  ```

## So far, 3D → 2D

- 지금까지는 단지  
  **3D View Frustum → 2D Projection Plane**  
  로의 투영 이야기였음

## Now, 3D → 3D

- 그러나 실제로 우리가 구현해야 하는 것은  
  **3D View Frustum → 3D Canonical View Volume**

- 즉, 원근 투영 이후에도 (x', y', z') 좌표는 유지되어야 함  
  → clip space의 깊이 정보가 필요

## First, 3D View Frustum → 3D Cuboid

- 우선은 canonical volume이 아닌, near/far 평면이 같은 위치의 cuboid를 고려
- x, y 좌표에 대해 이전 슬라이드와 같은 방식으로 투영 가능:

  ```
  y' = -d·y / z
  x' = -d·x / z
  ```

- near/far offset이 동일한 cuboid를 고려
- 문제는 z 좌표:
  - 깊이 z는 보존되지 않음 (z가 나눗셈 연산 포함 → 비선형)
  - 해결: z 값을 적절히 매핑하여 near/far 평면의 깊이 정보를 유지

## 3D View Frustum → 3D Cuboid

- z 값까지 포함하여 전체를 행렬로 표현:
  ```
  [x']   = [-dx/z]       [dz  0   0   0 ]   [x]
  [y']     [-dy/z]   =   [0  dz   0   0 ] * [y]
  [z']     [-X/z ]       [0   0   a   b ]   [z]
  [ 1 ]     [  1 ]       [0   0  -1   0 ]   [1]
  ```

- x, y에는 영향 없음 → z'는 x, y와 무관
  - 따라서 c₀ = c₁ = 0
- 원하는 조건:
  - z'(-n) = n
  - z'(-f) = f
- 선형식으로 z' 정의: `z'(z) = (a·z + b) / -z`
- 두 개의 미지수 a, b를 두 조건에 대입해 해 구함
  - 해: `a = fn`, `b = f + n`

## Final: 3D View Frustum → 3D Canonical View Volume

- `P_pers = P_orth · P_dc`
- P_dc 행렬 (near, far 반영):
  ```
  [n   0   0   0]
  [0   n   0   0]
  [0   0  f+n fn]
  [0   0  -1   0]
  ```
- frustum → cuboid → canonical volume 으로 변환

## Perspective Projection Matrix

- 최종 perspective projection 행렬:

  ```
  P_pers = P_orth · P_dc =

  [n/r  0     0         0   ]
  [0    n/t   0         0   ]
  [0    0   (f+n)/(n-f) fnf/(n-f)]
  [0    0    -1         0   ]
  ```

## Note on Mapped Depth (Z' value)

- Perspective projection은 깊이 z 값을 (-1, +1) 범위로 **비선형 매핑**
- 결과:
  - 카메라 가까이의 z 값일수록 정밀도가 높음
  - 멀수록 정밀도가 낮아짐
- 그래프:
  - X축: z 값 (원래 깊이)
  - Y축: 매핑된 z' 값

## Perspective Division, Clip / NDC Space

- clip space: shader 이후 장면 표현 (4D homogeneous)
- NDC space: perspective division 이후의 3D 좌표계
  - w로 나눠서 [x/w, y/w, z/w] 형태로 변환됨
- 실제 표현되는 범위: [-1, 1]

## [Demo] Perspective Projection - frustum

- 웹 데모: https://learnwebgl.brown37.net/08_projections/create_frustum/create_frustum.html
- 슬라이더로 left, right, top, near, far 값을 조절하며 변화 확인

## [Demo] Perspective Projection - perspective

- 웹 데모: https://learnwebgl.brown37.net/08_projections/create_perspective/create_perspective.html
- 슬라이더를 이용해 `fovy`, `aspect`, `near`, `far` 조절
- **frustum**과 **perspective** 중 어떤 것이 더 편리한가?

## Quiz 2

# Viewport Transformation

## Viewport Transformation

- Viewport transformation은 NDC 공간에서 화면 공간(screen space)으로 변환
- 마지막 단계의 변환: clip space → screen space
- 좌표계 범위:
  - NDC: (-1, -1, -1) ~ (1, 1, 1)
  - Screen: (0, 0, 0) ~ (width, height, 1)

## Recall that...

- 1. 객체 배치
  → Modeling transformation
- 2. 카메라 배치
  → Viewing transformation
- 3. 렌즈 설정
  → Projection transformation
- 4. **"스크린에 출력"**
  → **Viewport transformation**

## Viewport Transformation

- Canonical view volume (NDC)에서 z방향 +를 기준으로 내려다본다고 가정
- Viewport는 screen 상의 사각형 영역
- Viewport transformation도 결국 **windowing transformation**의 일종
- 깊이 값(z)은 [0, 1] 범위로 재매핑됨 (default depth buffer)

## Viewport Transformation Matrix

- windowing transformation matrix에서,
  - `x_p, x_l, x_h ...` 대신 viewport 변수 대입
- 변환 행렬:
  ```
  T_vp =
  [ width/2     0          0    width/2 + x_min ]
  [   0       height/2     0    height/2 + y_min]
  [   0          0       1/2         1/2       ]
  [   0          0         0           1       ]
  ```
- `(x_min, y_min)`부터 시작하여 `(width, height)` 크기 화면 좌표로 이동

<home/>