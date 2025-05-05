# 5 - Vertex Processing 1

## Outline

- Rasterization Pipeline & Vertex Processing  
- Modeling Transformation  
- Viewing Transformation

## Rasterization Pipeline & Vertex Processing

## Recall: Rasterization Pipeline

- Vertex Processing  
  - 정점(vertex)을 화면 좌표(screen space)로 변환  
- Primitive Processing  
  - 정점들을 모아 polygon 구성  
- Scan Conversion  
  - polygon을 fragment로 변환  
- Fragment Processing  
  - 조명 및 텍스처에 따라 각 fragment의 색 결정  
- Per-sample Operations  
  - depth test, alpha blending 등 수행

## Recall: Rasterization Pipeline

- Vertex Processing:  
  - 정점들을 화면 좌표계로 변환  
  - 일련의 정점 변환 시퀀스를 적용

- 우리가 지금까지 학습한 범위는 →  
  - Primitive Processing ~ Per-sample Operations

- 오늘과 다음 시간에 볼 내용 →  
  - **Vertex Processing**

## Vertex Processing

- 각 객체의 body frame에서의 정점 위치:

  ```
  P₁, P₂, P₃
  ```

- World frame으로의 변환:

  ```
  M * P₁, M * P₂, M * P₃
  ```

- → 하지만 아직 화면에 표시하기 위해선 추가 개념이 필요함

  **“카메라”가 장면을 바라본다는 개념 도입 필요**

- 이어지는 단계:

  2. “카메라” 배치  
  3. “렌즈” 선택  
  4. “스크린”에 투사

## In Terms of CG Transformation,

1. 객체 배치  
   → **Modeling Transformation**

2. 카메라 배치  
   → **Viewing Transformation**

3. 렌즈 선택  
   → **Projection Transformation**

4. 화면에 출력  
   → **Viewport Transformation**

- 위 모든 변환은 **행렬 곱셈**으로 구성됨

## Vertex Processing (Transformation Pipeline)

- Object space (body frame):  
  - 객체 기준 좌표계

- World space (world frame):  
  - 전체 장면 기준 좌표계

- 수행할 작업:
  - 이동(translate), 회전(rotate), 크기 조절(scale) 등  
  - 이전 강의에서 다룬 모든 affine 변환 포함

**Modeling transformation**  
- 객체 좌표계 (object space) → world 좌표계로 변환  
- 이전 강의에서 배운 affine transformation을 적용함

**Placing a “camera”**  
- world 좌표계 상에서 카메라를 배치함  
- view space (또는 camera space) 정의됨

**Viewing transformation**  
- world space → camera space로 변환  
- 즉, world 기준 장면을 카메라 기준으로 재배열

**Selecting its “lens”**  
- 투영 방식을 정의함 (예: perspective, orthographic 등)  
- view space → **Clip space / NDC (normalized device coordinate) space**

**Projection transformation**  
- 시야각(FOV), 종횡비, near/far plane 등을 고려하여  
  3D 공간을 **정규화된 장치 좌표계(NDC)** 로 변환  
- 좌표 범위: (-1, -1, -1) ~ (1, 1, 1)

**Displaying on a “cinema screen”**  
- NDC 공간을 이미지 공간으로 변환  
- 즉, 픽셀 좌표계 상에 화면 출력

**Viewport transformation**  
- NDC 좌표를 실제 화면 해상도에 맞게 스케일 조정  
- 좌표계를 정규화 공간 → 스크린 공간으로 변환

**Transformation Pipeline 전체 요약**

Object space → View space → Clip space → Screen space

1. **Modeling transformation**  
2. **Viewing transformation**  
3. **Projection transformation**  
4. **Viewport transformation**

→ 모든 과정은 **행렬 곱(Matrix Multiplication)** 으로 구성됨

- Modeling, Viewing, Projection, Viewport 변환은  
  **4x4 행렬 곱셈**으로 처리됨

**MVP Matrix 적용**  
- 하나의 점 $begin:math:text$ \\mathbf{p}_o $end:math:text$가  
  - 모델링 변환: $begin:math:text$ M $end:math:text$  
  - 뷰잉 변환: $begin:math:text$ V $end:math:text$  
  - 투영 변환: $begin:math:text$ P $end:math:text$  
  - 뷰포트 변환: $begin:math:text$ T_{vp} $end:math:text$  
  을 거쳐서  
  - 최종 위치 $begin:math:text$ \\mathbf{p}_s $end:math:text$로 변환됨

  ```
  p_s = T_vp * P * V * M * p_o
  ```

## Modeling Transformation

- object space에서 world space로의 변환  
  $begin:math:text$ \\mathbf{p}_w = M \\mathbf{p}_o $end:math:text$  
- 이때 M은 affine transformation들의 조합  
- 예: 이동, 회전, 스케일 등

## Recall: Directions of the "arrow"

- $begin:math:text$ \\mathbf{p}_w = M \\mathbf{p}^{(1)} $end:math:text$  
- 1번째 의미: geometry 변환 방향  
- 3번째 의미: frame이 바뀌는 관점에서 → 방향 반대가 되는 것처럼 보일 수 있음

## Modeling Transformation

- 객체는 **object의 고유 좌표계(body frame)** 에 정의됨
- object → world 변환을 **modeling transformation**이라 하며  
  행렬 $begin:math:text$ M $end:math:text$로 표현됨

- 이 행렬 $begin:math:text$ M $end:math:text$은 지금까지 배운 affine 변환(이동, 회전, 스케일 등)의 조합

**예시: 다중 부품의 modeling**

- 바퀴, 캐빈, 컨테이너 각각의 object frame에서  
  - modeling matrix $begin:math:text$ M_{wheel}, M_{cab}, M_{container} $end:math:text$를 적용  
  - 최종적으로 world frame 상의 전체 트럭 위치가 구성됨

## Quiz 1

## Viewing Transformation

- Viewing transformation은 **world space**에서 **camera space(view space)**로 변환하는 연산이다.
- 변환된 결과는 결국 화면상의 2D 이미지(screen space)에 나타난다.
- 이 과정은 다음과 같은 수식을 따른다:  
  ```
  pᵥ = V * p𝓌
  ```

## Recall that...

- 1. 객체 배치  
   → Modeling transformation

- 2. "카메라" 배치  
   → Viewing transformation

- 3. "렌즈" 선택  
   → Projection transformation

- 4. "스크린"에 표시  
   → Viewport transformation

## Viewing Transformation

- Viewing transformation은 **rigid transformation**으로서, **회전과 이동**을 포함한다.
- world space에서 view space로 변환하는 데 사용되며, 변환 행렬은 **viewing matrix V**이다.

## Viewing Transformation

- 목적: **camera frame** 상에서 모든 객체의 vertex들을 표현하는 것
- 이를 위해 **camera frame**을 정의해야 함 (world frame 기준)
- camera frame을 정의한다는 것은 곧 **카메라의 위치와 방향**을 결정하는 것과 같다.

## Defining Camera Frame 1 - "LookAt"

- 카메라의 위치와 방향을 정의하는 여러 방식이 있다.
- 그 중 직관적인 방식으로 **lookat 함수**를 소개:
  - **Eye point**: 카메라 위치
  - **Look-at point**: 카메라가 바라보는 지점
  - **Up vector**: 어느 방향이 위를 나타내는지 설명

## [Demo] LookAt Function

- https://learnwebgl.brown37.net/07_camera/camera_lookat/camera_lookat.html
- 슬라이더를 움직이며 eye, center, up 값을 바꿔보면,
- 3D 장면의 뷰가 어떻게 변하는지 관찰할 수 있다.

## Defining Camera Frame 1 - "LookAt"

- eye point, look-at point, up vector가 주어지면, **camera frame**을 계산할 수 있다.
- 카메라 좌표축으로는 일반적으로 **u, v, w** 벡터를 사용하며, 이는 각각 다음을 나타냄:
  - **u**: 오른쪽 방향
  - **v**: 위쪽 방향
  - **w**: 뒤쪽 방향
- camera frame을 정의하려면 **u, v, w 벡터**와 **원점**을 구해야 함

## Given Eye point, Look-at point, Up vector

- Eye point, Look-at point, Up vector를 이용하여 카메라 좌표계를 정의한다.

## Getting origin point

- Eye point 자체가 **카메라 좌표계의 원점**이 된다.
  ```
  origin of camera frame = Eye point
  ```

## Getting "w" axis vector

- Look-at point를 바라보는 방향을 w축으로 정의한다.
  ```
  w = (P_eye - P_ref) / ||P_eye - P_ref||
  ```

## Getting "u" axis vector

- up 방향 벡터와 w 벡터의 외적을 통해 u 축을 계산한다.
  ```
  u = (V_up × w) / ||V_up × w||
  ```

## Getting "v" axis vector

- 직교좌표계를 만들기 위해 다음과 같이 정의한다.
  ```
  v = w × u
  ```

## Recall: 2) Affine Transformation Matrix defines an Affine Frame w.r.t. World Frame

- Affine 변환 행렬 M은 좌표계(프레임)를 변환하는데 사용된다.
- 프레임 {1}은 프레임 {0} 기준으로 정의된다.
- 좌표계 축(x, y, z)과 원점 좌표가 행렬의 열(column)로 구성된다.

## Thus, the Camera Frame is defined by

- camera frame의 변환 행렬 M은 다음과 같이 구성된다:
  ```
  | u_x  v_x  w_x  P_eye_x |
  | u_y  v_y  w_y  P_eye_y |
  | u_z  v_z  w_z  P_eye_z |
  |  0     0     0      1  |
  ```

## How can we get viewing matrix V from the camera frame?

- 모델링 변환의 방식과 유사하게 viewing matrix V를 구할 수 있다.
- 기본적으로, 객체의 body frame에서의 좌표를 world frame으로 변환하는 affine matrix의 역행렬이 바로 viewing matrix가 된다.

## How can we get viewing matrix V from the camera frame?

- 객체 공간(Object space)을 카메라 공간(Camera space)으로 바꾸면, 어떤 변환 행렬이 필요할까?

## How can we get viewing matrix V from the camera frame?

- 뷰 공간(View space) → 월드 공간(World space) 방향으로 변환한다면?

## How can we get viewing matrix V from the camera frame?

- 카메라 프레임에서의 축 벡터(u, v, w)와 원점(P_eye)를 사용해 변환 행렬을 구성할 수 있다.
- 이 행렬이 바로 **Rigid transformation matrix**이다.
  ```
  | u_x  v_x  w_x  P_eye_x |
  | u_y  v_y  w_y  P_eye_y |
  | u_z  v_z  w_z  P_eye_z |
  |  0     0     0     1   |
  ```

## Viewing Transformation is the Opposite Direction

- Viewing matrix V는 위의 행렬의 역행렬로 정의된다.
- 즉, **반대 방향**으로의 변환이다.
  ```
  V = [ R  t ]^-1
    = [ R^T  -R^T * t ]
  ```

## Inverting Rigid Transformation Matrix

- 3×3 회전 행렬 R과 3×1 이동 벡터 t를 포함한 rigid 변환 행렬 T의 역행렬은 다음과 같다:
  ```
  T = [ R  t ]
      [ 0  1 ]

  T^-1 = [ R^T  -R^T * t ]
         [  0        1   ]
  ```
- 카메라 프레임 행렬의 경우, R은 u, v, w 방향 벡터로 이루어진다.

## Viewing Transformation is the Opposite Direction

- V는 다음과 같이 명시적으로 구성된다:
  ```
  V =
  | u_x  v_x  w_x  -u·P_eye |
  | u_y  v_y  w_y  -v·P_eye |
  | u_z  v_z  w_z  -w·P_eye |
  |  0     0     0       1  |
  ```

## Defining Camera Frame 2 - Translate & Rotate

- "LookAt" 함수 외에도, 카메라의 위치와 방향을 정의할 수 있는 방법이 있다.
- 단순히 **translate**하고 **rotate**하면 rigid transformation 행렬로 정의 가능하다.

## [Demo] Translate & Rotate Camera

- 링크: [http://learnwebgl.brown37.net/07_cameras/camera_trunk_axes/camera_trunk_axes.html](http://learnwebgl.brown37.net/07_cameras/camera_trunk_axes/camera_trunk_axes.html)
- 슬라이더로 eye 위치를 바꾸거나 축 방향 및 각도를 지정해 회전하는 카메라 움직임을 시각적으로 관찰할 수 있다.

## Moving Camera vs. Moving World

- 사실, 이 둘은 **동등한 연산**이다.

- 카메라를 (1, 0, 2)만큼 이동시키는 것은  
   == 월드를 (-1, 0, -2)만큼 이동시키는 것과 같다.

- 카메라를 y축 기준으로 **60도 회전**시키는 것은  
   == 월드를 y축 기준으로 **-60도 회전**시키는 것과 같다.

## [Demo] Moving Camera vs. Moving World

- [https://webglfundamentals.org/webgl/lessons/resources/camera-move-camera.html?mode=0](https://webglfundamentals.org/webgl/lessons/resources/camera-move-camera.html?mode=0)  
- [https://webglfundamentals.org/webgl/lessons/resources/camera-move-camera.html?mode=2](https://webglfundamentals.org/webgl/lessons/resources/camera-move-camera.html?mode=2)

- (Left) Moving camera  
- (Center) Moving world

<home/>