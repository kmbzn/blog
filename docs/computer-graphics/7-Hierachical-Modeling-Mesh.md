# 7 - Hierarchical Modeling, Mesh  

## Next Class Announcement

- Hanyang University 학생들의 예비군 훈련 일정(4월 28~30)에 따라
- 이 수업과 시간은 겹치지 않지만, 수강생 간의 공정성을 위해

- 다음 주 강의 및 실습은 **녹화 영상으로 제공**됨 (LMS 업로드 예정)
  - 강의 및 실습에 질문 있으면 LMS Q&A 게시판 이용

- **TA의 실습 세션도 없음**
  - 과제 관련 질문도 LMS Q&A 게시판을 통해 문의

## (Updated) Midterm Exam Announcement

- 일시: 5월 7일 (수) 오후 6:30 \~ 7:30  
- 장소: 추후 공지  
- 범위: Lecture 2\~7, Lab 2\~7

- 시험 시작 후 30분 이내 퇴실 불가  
- 시험 시작 후 30분이 지나면 입실도 불가 (**절대 지각 금지**)

- **학생증 필수 지참**

## Outline

- **Hierarchical Modeling**
  - 계층적 모델링 개념
    - 예: 사람 모형
  - 계층 모델 렌더링
  - 일련의 변환 해석

- **Mesh**
  - 개별 삼각형
  - 인덱스 삼각형 집합

# Hierarchical Modeling

## Hierarchical Modeling

- 하위 구성 요소(자식)를 상위 구성 요소(부모)에 **중첩**하여 트리 구조로 표현
- 각 파트는 고유한 **body frame**을 가짐
- 각 파트의 움직임은 부모의 body frame 기준으로 기술됨

## Example - Human Figure

- 각 파트는 다음과 같은 트리 구조를 가짐:
  - Hips → Spine → Head / 팔 / 다리 → 손발

## Human Figure - Frames

- 각 파트는 고유한 body frame을 가짐

## Human Figure - Movement of rhip & rknee

- 각 파트의 움직임은 **부모의 frame 기준으로 기술됨**
  - 각 파트는 **부모 frame 기준의 변환 행렬(transformation)**을 가짐
- 이는 하위 파트를 "묶어서(group)" 제어할 수 있게 해 줌

## Human Figure - Movement of more joints

- 각 파트의 움직임은 **부모의 frame 기준으로 기술됨**
  - 각 파트는 **부모 frame 기준의 변환 행렬(transformation)**을 가짐
- 이는 하위 파트를 "묶어서(group)" 제어할 수 있게 해 줌

## Hierarchical Model

- 계층적 모델은 일반적으로 **트리 구조(tree structure)**로 표현됨
- 전체 장면(scene)을 표현하는 그래프 구조 **scene graph**도 예시
- 각 노드는 **부모 노드의 frame 기준의 변환**을 가짐

## Rendering Hierarchical Models

- 계층 모델을 렌더링하려면,  
  **각 노드의 frame을 world frame 기준으로 변환**해야 함 → 각 정점의 global 위치 계산

- 복습:  
  - `p^(0) = Mp^(1)`  
    - {1}에 서서 p를 봄 → p^(1)  
    - {0}에 서서 p를 봄 → p^(0)

## Rendering Hierarchical Models

- 각 노드는 **부모 노드 기준의 변환(local transformation)**을 가짐  
  → **Local transformation**

- 예:  
  - Hip 위치 및 자세: `M_hips`  
  - LeftUpLeg 위치 및 자세: `M_leftupleg` (hips 기준)

## Rendering Hierarchical Models

- 각 노드의 frame을 **world frame 기준으로 표현**해야 렌더링 가능  
  → **Global transformation**

- 질문:  
  - **다른 노드의 local 변환을 이용해서** 어떻게 global 변환을 계산할 수 있을까?

## Recall: Post-(right) Multiplication

- `p' = M₁M₂p` (M₂에 post-multiply)  
  → L-to-R

1) `M₁`: body frame {0} → {1} 변환  
2) `M₂`: body frame {1} → {2} 변환  
3) `p`: {2}의 점 → {0} 기준으로 위치 계산

예:
```
p' = TRp
```

## Interpretation of a Series of Transformations

- `p₀ = I p₀` (처음 상태는 단위행렬 기준)

- {0}에 서서 원을 관측하며  
  {0} → {1} → {2} → ... → {4} 순으로 body frame이 변함

- `p₁ = M₁ p₀`  
  - 현재 body frame: {1}, 기준: {0}  
  - {1}에서 관찰 시 → `p₀`  
  - {0}에서 관찰 시 → `p₁`

- `p₂ = M₁ M₂ p₀`  
  - 현재 body frame: {2}, 기준: {0}  
  - {2}에서 관찰 시 → `p₀`  
  - {0}에서 관찰 시 → `p₂`

- `p₃ = M₁ M₂ M₃ p₀`  
  - 현재 body frame: {3}, 기준: {0}  
  - {3}에서 관찰 시 → `p₀`  
  - {0}에서 관찰 시 → `p₃`

- `p₄ = M₁ M₂ M₃ M₄ p₀`  
  - 현재 body frame: {4}, 기준: {0}  
  - {4}에서 관찰 시 → `p₀`  
  - {0}에서 관찰 시 → `p₄`

- 반복 구조 재설명  
  - `p₄ = M₁ M₂ M₃ M₄ p₀`  
  - {4}에서 `p₀`를 보는 관찰 → `p₄`  
  - {0}에서 `p₄` 관찰

- 동일 내용 시각화:
  - `M₁`, `M₂`, `M₃`, `M₄` 순서로 적용
  - 각 변환은 이전 노드의 body frame 기준으로 적용됨
  - 마지막으로 `p₀`를 변환하여 `p₄` 획득

## Computing Global Transform from Series of Local Transforms

- `p₄ = M₁ M₂ M₃ M₄ p₀`  
  - node 4의 **global transformation**: `M₁ M₂ M₃ M₄`

- 각 `Mᵢ`: i번째 노드의 **local transformation**

- 적용 순서:
  - node 1의 body frame 기준 → node 2 → node 3 → node 4

| Node i       | Global Transform Gᵢ = ...                         |
|--------------|---------------------------------------------------|
| Hips         | Mₕᵢₚₛ                                            |
| Spine        | Mₕᵢₚₛ Mₛₚᵢₙₑ                                     |
| Head         | Mₕᵢₚₛ Mₛₚᵢₙₑ Mₕₑₐ𝑑                              |
| RightArm     | Mₕᵢₚₛ Mₛₚᵢₙₑ Mᵣᵢ𝗀ₕₜᴬʳᵐ                          |
| RightForeArm | Mₕᵢₚₛ Mₛₚᵢₙₑ Mᵣᵢ𝗀ₕₜᴬʳᵐ Mᵣᶠₐ                    |
| RightHand    | Mₕᵢₚₛ Mₛₚᵢₙₑ Mᵣᵢ𝗀ₕₜᴬʳᵐ Mᵣᶠₐ Mᵣₕₐ              |
| LeftArm      | Mₕᵢₚₛ Mₛₚᵢₙₑ Mₗₑ𝒻ₜᴬʳᵐ                          |

- 트리 구조 기반으로 각 노드의 global 변환 계산 가능

## Rendering Hierarchical Models

- `i`번째 노드가 단위 큐브로 렌더링된다고 가정할 때,
  - 단위 큐브의 정점 `p₀`는 world frame에서 `pᵢ = Gᵢ * p₀`로 표현됨

| Node i       | Global Transform Gᵢ = ...                         |
|--------------|---------------------------------------------------|
| Hips         | Mₕᵢₚₛ                                              |
| Spine        | Mₕᵢₚₛ Mₛₚᵢₙₑ                                      |
| Head         | Mₕᵢₚₛ Mₛₚᵢₙₑ Mₕₑₐ𝑑                              |
| RightArm     | Mₕᵢₚₛ Mᵣᵢ𝗀ₕₜᴬʳₘ                                  |
| RightForeArm | Mₕᵢₚₛ Mᵣᵢ𝗀ₕₜᴬʳₘ Mᵣᶠₐ Mᵣ𝗁                          |
| LeftArm      | Mₕᵢₚₛ Mₗₑ𝑓ₜᴬʳₘ                                   |
| ...          |                                                   |

## Rendering Hierarchical Models - Shape Transformation

- 만약 i번째 노드가 단위 큐브가 아니라 특정 shape `Sᵢⱼ`로 렌더링된다면,
  - `pᵢⱼ = Gᵢ * Sᵢ * p₀`

- 특정 노드 i의 j번째 shape에 대해 shape 변환 `Sᵢⱼ`를 사용할 수 있음

## Rendering Hierarchical Models

- i번째 노드마다 global transform Gᵢ를 저장하여 렌더링 시 재사용 가능

## Quiz 1

# Mesh

## Many ways to digitally encode geometry

- **EXPLICIT**
  - point cloud
  - polygon mesh
  - subdivision, NURBS
  - L-systems
  - ...

- **IMPLICIT**
  - level set
  - algebraic surface
  - ...

- 각 표현 방식은 과제/기하 유형에 따라 적합한 선택지가 다름

## The Most Popular Representation: Polygon Mesh

- 단순한 표현으로 복잡한 3D 형상을 모델링 가능하며 렌더링 속도도 빠름

- **Polygon**: 직선으로 둘러싸인 “닫힌” 도형

- **Polygon mesh**: 여러 polygon이 이어져서 형상을 구성하는 구조  
  - 주로 **triangle** 또는 **quad** 사용

## Triangle Mesh

- 일반적인 N각형은
  - 평면이 아닐 수도 있고
  - 오목할 수 있으며
  - 렌더링에 적합하지 않음

- 반면 triangle은 항상 평면이며 convex 형태  
  - 따라서 GPU는 모든 물체를 triangle로 분해하여 처리

- N각형도 triangle로 나눌 수 있음

- 결론: Triangle mesh 중심으로 학습

## Representation for Triangle Mesh

- 이 주제는 메모리에 정점을 저장하는 방식에 대한 것이다
  - 정점의 위치
  - 정점 간 관계(삼각형 구성)

- 기본적인 두 가지 표현 방식:
  - Separate triangles
  - Indexed triangle set

## Vertex Winding Order

- Vertex winding order는 다각형의 정점들이 나열되는 순서임

- 이 순서로 다각형의 "앞면"을 결정함
  - OpenGL: 반시계 방향(CCW)이 앞면
  - Direct3D: 시계 방향(CW)이 앞면

## Separate triangles

- counter-clockwise 순서로 정점 나열

- 예시:
  - vertex array:
    ```
    tri[0] → (x₀,y₀,z₀), (x₁,y₁,z₁), (x₂,y₂,z₂)
    tri[1] → (x₀,y₀,z₀), (x₂,y₂,z₂), (x₃,y₃,z₃)
    ```

## Separate Triangles

- 단점:
  - 메모리 낭비
  - 반올림 오차로 인한 틈 발생
  - 인접 삼각형 탐색 어려움
    - t2의 이웃 삼각형을 찾기 위해, t2의 정점 중 거리 0인 정점을 전부 비교해야 함

## Example: a cube of length 2

- 정점 인덱스 및 위치 예:

| index | position        |
|-------|-----------------|
| 0     | (-1, -1, 1)     |
| 1     | (1, -1, 1)      |
| 2     | (1, 1, 1)       |
| 3     | (-1, 1, 1)      |
| 4     | (-1, -1, -1)    |
| 5     | (1, -1, -1)     |
| 6     | (1, 1, -1)      |
| 7     | (-1, 1, -1)     |

## Example Cube in Separate Triangles

- Separate triangle 표현 방식에서는
  - 정점 36개로 cube의 12개 삼각형 표현
  - vertex array에서 동일 정점이 여러 번 반복됨

## Indexed triangle set

- 각 정점을 한 번만 저장
- 각 삼각형은 3개의 정점 인덱스를 가리킴
- counter-clockwise 순서

- 예시:
  - vertex array:
    ```
    vert[0] = (x₀, y₀, z₀)
    vert[1] = (x₁, y₁, z₁)
    vert[2] = (x₂, y₂, z₂)
    ...
    ```

  - index array:
    ```
    tInd[0] = (0, 2, 1)
    tInd[1] = (0, 3, 2)
    ...
    ```

## Indexed Triangle Set

- 메모리 효율적: 각 정점 위치는 한 번만 저장됨

- 위상(topology)과 기하(geometry)를 분리하여 표현
  - Topology: 정점들이 어떻게 연결되어 삼각형을 구성하는지
  - Geometry: 정점들이 공간에 위치하는 실제 좌표

- 인접 삼각형 탐색이 명확함
  - 인접 삼각형은 동일한 정점 인덱스를 공유함

## Example Cube in Indexed Triangle Set

- Indexed triangle set 방식에서는
  - 정점 8개와
  - 삼각형 12개의 정점 인덱스로 cube를 표현함

## Quiz 2

## Creating Polygon Meshes

- 일반적으로 polygon mesh는 3D 모델링 프로그램으로 생성됨
  - 이 데이터가 저장된 파일을 object file 또는 model file이라 부름

- 응용프로그램(예: 게임)은 이 object file에서 정점과 인덱스를 로드하여 객체를 그림

## 3D Model File Formats

- DXF – AutoCAD
  - 2D, 3D 바이너리 지원

- 3DS – 3DS MAX
  - 유연한 이진 형식

- VRML – Virtual reality modeling language
  - ASCII 기반, 사람이 읽고 쓸 수 있음

- OBJ – Wavefront OBJ format
  - ASCII 기반 (사람이 읽고 편집 가능)
  - 매우 단순하고 널리 사용됨

- 이 슬라이드에서는 OBJ 포맷을 자세히 살펴봄

## OBJ File Format

```
# 주석

# 정점 위치 (x, y, z)
v 0.123 0.234 0.345
v 0.2 0.5 0.3
...

# 정점 노멀 (x, y, z)
vn 0.707 0.000 0.707
...

# 텍스처 좌표 (u, v)
vt 0.500 1
...

# 면 정의 (모든 인덱스는 1부터 시작)

# 정점 인덱스만 있는 경우
f 1 2 3
f 2 3 4

# 정점/텍스처/노멀 인덱스
f 6/4/1 3/3/7 6/3/6

# 정점/노멀 인덱스
f 1//1 8//2 9//3

# 정점/텍스처 인덱스
f 3/1 4/2 5/3
```

- 기타 지원 기능:

  - 선(Polyline)
    ```
    l 1 5 8 2 4 9
    ```

  - 재질(Materials)
    ```
    mtllib [외부 .mtl 파일 이름]
    usemtl [재질 이름]
    ```

- 본 수업에서는 위 기능들은 사용하지 않음

## An OBJ Example

```
# A simple cube
v 1.000000 -1.000000 -1.000000
v 1.000000 -1.000000  1.000000
v -1.000000 -1.000000  1.000000
v -1.000000 -1.000000 -1.000000
v 1.000000  1.000000 -0.999999
v 0.999999  1.000000  1.000001
v -1.000000  1.000000  1.000000
v -1.000000  1.000000 -1.000000

f 1 2 3 4
f 5 8 7 6
f 1 5 6 2
f 2 6 7 3
f 3 7 8 4
f 5 1 4 8
```

## OBJ Sources

- https://free3d.com/
- https://www.cgtrader.com/free-3d-models

- 위 사이트들에서 `.obj` 모델 파일을 다운로드 받아 Blender에서 열 수 있음

- OBJ 파일 형식은 매우 보편적임:
  - 대부분의 모델링 프로그램이 OBJ 포맷으로 export 가능
  - 대부분의 렌더링 패키지가 OBJ 포맷을 읽을 수 있음

<home/>