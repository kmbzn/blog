# 3 - Transformations

Yoonsang Lee  
Hanyang University  
Spring 2025

## Outline

- 2차원 변환  
  - Scaling, Rotation, Shearing, Reflection  
  - Translation

- 변환의 종류

- 변환의 합성과 Homogeneous Coordinates

- 두 가지 3차원 직교 좌표계

- 3차원 Affine 변환

## What is Transformation?

- **Geometric Transformation**  
  - 물체의 위치, 방향, 크기 또는 형태를 수학적으로 변경하는 과정  
    → “점들의 집합을 이동시키는 것”

  - 복잡한 장면과 애니메이션 생성을 가능하게 하며, computer graphics에서 필수적임

- 예시:  
  - Translation  
  - Rotation  
  - Scaling  
  - Shearing

# 2D Transformations

## Transformation

- “점들의 집합을 이동시키는 것”

- 변환 T는 벡터 공간 S에 있는 임의의 입력 벡터 v를 T(v)로 사상함

  수식 표현:
    S → { T(v) | v ∈ S }

(사각형이 평행이동되는 그림 예시)

## Linear Transformation

- 행렬 곱을 통해 변환을 정의할 수 있음

    T(v) = Mv

- 이는 행렬 곱셈이 선형 사상을 나타내므로  
  **linear transformation**이라 부름

- linear transformation은 다음 조건을 만족해야 함:

$$
T(v_1 + v_2) = T(v_1) + T(v_2)
$$

$$
T(c \cdot v) = c \cdot T(v)
$$

- 행렬 M 또한 동일한 선형성을 만족:

    M(v₁ + v₂) = Mv₁ + Mv₂  
    M(c * v)   = c * (Mv)

## 2D Linear Transformations

- 2×2 행렬은 다음과 같은 2차원 linear transformation을 표현할 수 있음:

  - uniform scaling  
  - non-uniform scaling  
  - rotation  
  - shearing  
  - reflection

## 2D Linear Trans. – Uniform Scaling

- x축과 y축 모두에서 동일한 비율로 확대 또는 축소

- 수식 예:

    p = [ x  
          y ]

    S = [ sx   0  
           0  sy ]

    p' = S * p = [ sx * x  
                   sy * y ]

(예: sx = sy = 1.5일 때 도형이 1.5배 확대됨)

## 2D Linear Trans. – Nonuniform Scaling

- x축과 y축 방향으로 **서로 다른 비율로** 확대 또는 축소

```
S = [ sx   0 ]    p = [ x ]     S * p = [ sx * x ]
    [ 0   sy ]        [ y ]             [ sy * y ]
```

(예: sx = 1.5, sy = 0.8 → x축 방향은 확대, y축 방향은 축소)

## 2D Linear Trans. – Rotation

- 회전은 행렬 곱으로 표현 가능하며, 따라서 선형 변환임

- 양의 각도는 반시계 방향(CCW)을 의미함

```
회전 행렬 Rθ =
[ cosθ  -sinθ ]  
[ sinθ   cosθ ]
```

```
Rθ * [ x ] = [ x * cosθ - y * sinθ ]
     [ y ]   [ x * sinθ + y * cosθ ]
```

(예: θ = 30도 → 30도 반시계 회전)

## 2D Linear Trans. – Rotation (예시 수치 포함)

```
R = [ 0.866  -0.5   ]     p = [ x ]     R * p = [ 0.866x - 0.5y ]
    [ 0.5     0.866 ]         [ y ]             [ 0.5x + 0.866y ]
```

(30도 반시계 회전 시 적용되는 회전 행렬)

## Numbers in Matrices: Scaling, Rotation

- 행렬의 **각 숫자는 어떤 의미를 가질까?**

- 단위 벡터([1, 0]^T, [0, 1]^T)를 기준으로 scaling 또는 rotation 시  
  각각의 column vector가 변환된 축의 방향을 나타냄

- Canonical basis vectors: 직교 좌표계에서 x, y축 방향 단위 벡터  
- 결과적으로, 변환된 좌표계의 축 방향을 나타냄

## Numbers in Matrices: Scaling, Rotation (계속)

- 행렬의 **column vector**는 그 행렬의 column space를 구성하는 **basis vectors**

- column space: column vector들의 선형 결합으로 표현 가능한 모든 벡터의 집합

(예시 이미지: rotation과 scaling 시 column vector들이 어떻게 변화하는지 시각화)

## 2D Linear Trans. – Reflection

- Reflection은 **non-uniform scaling의 특수한 경우**로 간주 가능

- 예시: x축 방향 반전

```
[ -1   0 ]   * [ x ]   = [ -x ]
[  0   1 ]     [ y ]     [  y ]
```

(좌우 반전된 이미지 예시 포함)

## 2D Linear Trans. – Shearing

- 물체를 **측면으로 밀기(push sideways)**

- 예시: x축 기준으로 y에 비례하여 x 이동

```
[ 1   a ]   * [ x ]   = [ x + a*y ]
[ 0   1 ]     [ y ]     [   y     ]
```

(예: a = 0.5 → 오른쪽으로 밀린 도형 예시 포함)

## Identity Matrix

- 아무런 변환도 수행하지 않는 행렬 → **"Doing nothing"**

```
[ 1   0 ]   * [ x ]   = [ x ]
[ 0   1 ]     [ y ]     [ y ]
```

(도형의 위치, 크기, 방향이 유지됨)

## [Demo] 2D Linear Transformations

- https://www.integral-domain.org/williams/Applets/algebra/linearTransformations.php

- 행렬 요소의 값을 바꿔보세요  
- 다양한 변환 버튼을 눌러보세요

## Quiz 1

- Go to https://www.slido.com/  
- Join `#cg-ys`  
- Click "Polls"

- 아래 형식으로 정답을 제출하세요:  
  - Student ID: Your answer  
  - 예: 2021123456: 4.0

- 반드시 위 형식에 맞게 제출해야 출석으로 인정됩니다

## 2D Translation

- Translation은 가장 간단한 변환:  
  T(v) = v + u

- 역변환(Inverse):  
  T⁻¹(v) = v − u

(도식: v 벡터에서 u만큼 이동한 결과가 T(v))

## Is translation linear transformation?

- **아니오. 선형 변환(linear transformation)이 아님**

- 선형성(linearity)을 만족하지 않음:  
  T(v₁ + v₂) ≠ T(v₁) + T(v₂)  
  T(cv) ≠ cT(v)

  예:  
    cT(v) = c(v + b) = cv + cb ≠ T(cv) = cv + b

- 벡터 덧셈을 사용해 표현 가능:  
  T(v) = v + u

- 선형 변환과 결합할 수 있음:  
  T(v) = Mv + u

- → **Affine transformation**

## Let’s check again

- **Linear transformation**
  - Scaling, Rotation, Reflection, Shearing
  - 행렬 곱셈으로 표현 가능  
    T(v) = Mv

- **Translation**
  - 선형 변환이 아님  
  - 벡터 덧셈으로 표현됨  
    T(v) = v + u

- **Affine transformation**
  - 선형 변환과 translation을 결합한 형태  
    T(v) = Mv + u

# Classes of Transformations

## Rigid Transformations

- 모든 점 사이의 거리를 유지함

  ∥g(v) − g(w)∥ = ∥v − w∥  
  ∀v, w ∈ ℝ² (g: rigid transformation)

- "Handedness"를 보존함  
  - 회전(rotation)의 경우 handedness 보존 조건:  
    g(v) = Rv + t, ∀v ∈ ℝ²  
    (Reflection은 보존하지 않음)  
    (Translation은 방향을 바꾸지 않으므로 영향을 주지 않음)

- Rigid transformation의 예:
  - Translation  
  - Identity  
  - Rotation

- 일부 문헌에서는 reflection을 rigid로 분류하기도 하나, 본 강의에서는 포함하지 않음

## Similarity Transformations

- 각도를 보존함  
  - (rigid transformation도 각도 보존 포함)

- Similarity transformation의 예:
  - Translation  
  - Identity  
  - Rotation  
  - **Uniform Scaling**

- 일부 문헌에서는 reflection도 포함하나, 본 강의에서는 다루지 않음

## Linear Transformations

- 원점을 보존함

- 포함되는 변환들:
  - Translation
  - Identity
  - Rotation
  - Uniform Scaling
  - Scaling
  - Reflection
  - Shearing

(도식: Linear은 Similarity, Rigid, Affine을 모두 포함하는 개념)

## Affine Transformations

- 평행선을 유지함  
- 직선 상의 거리 비율을 유지함

- Affine 변환의 포함 관계:
  - Rigid ⊂ Similarity ⊂ Affine ⊂ Linear

## Projective Transformations

- 직선을 보존함

- 포함 관계:
  - Rigid ⊂ Similarity ⊂ Affine ⊂ Linear ⊂ Projective

- 가장 바깥쪽 계층은 Perspective 변환

# Composition of Transformations & Homogeneous Coordinates

## Composition of Transformations

- 어떤 물체에 T 변환을 적용한 후, S 변환을 추가 적용:

      p → T(p) → S(T(p)) = (S ∘ T)(p)

- 2D linear transformation의 합성은  
  2×2 행렬 곱셈으로 표현 가능:

```
T(p) = M_T * p  
S(p) = M_S * p

(S ∘ T)(p) = M_S * M_T * p
           = (M_S M_T)(p)
```

## Order Matters!

- 행렬 곱셈은 결합법칙은 성립하지만  
  교환법칙은 성립하지 않음:

```
(AB)C = A(BC)  
AB ≠ BA
```

- 따라서, **변환의 적용 순서가 매우 중요함**

(예: Scale → Rotate vs Rotate → Scale 결과가 다름)

## [Demo] Composition of Linear Transformations

- https://www.integral-domain.org/williams/Applets/algebra/linearTransformations.php

- identity matrix로 초기화 (1 0 0 1 입력)  
- "Compose Transformations" 버튼 클릭  
- 두 개의 변환을 서로 다른 순서로 적용해보기

## Problems when handling Translation as Vector Addition

- 선형 변환(회전, 스케일 등)과 translation을  
  **일관된 방식으로 표현할 수 없음**

- Affine 변환의 합성은 복잡해짐:

```
T(p) = M_T * p + u_T  
S(p) = M_S * p + u_S

(S ∘ T)(p) = M_S(M_T * p + u_T) + u_S  
           = (M_S M_T) * p + (M_S * u_T + u_S)
```

- 우리는 더 깔끔한 표현 방식이 필요함  
  → **Homogeneous coordinates**

## Homogeneous Coordinates

- 핵심 아이디어: 2D 점을 3D 좌표계 상에 표현

- 벡터에는 추가 성분(w), 행렬에는 추가 행/열을 추가  
  - 점에는 항상 w = 1  
  - 2D 점 (x, y)^T → (x, y, 1)^T

- 2D linear transformation의 표현:

```
[ a  b  0 ]   [ x ]     [ ax + by ]
[ c  d  0 ] * [ y ]  =  [ cx + dy ]
[ 0  0  1 ]   [ 1 ]     [   1     ]
```

## Homogeneous Coordinates

- 2D translation의 표현:

```
[ 1  0  t ]   [ x ]     [ x + t ]
[ 0  1  s ] * [ y ]  =  [ y + s ]
[ 0  0  1 ]   [ 1 ]     [   1   ]
```

- 2D affine transformation의 표현:

```
[ m11  m12  u1 ]  
[ m21  m22  u2 ]   ← linear part + translational part
[  0    0    1 ]
```

## Homogeneous Coordinates

- affine transformation 합성은 3×3 행렬 곱셈으로 간단하게 처리 가능:

```
T(p) = M_T * p + u_T  
S(p) = M_S * p + u_S
```

→ block 행렬 표현:

```
T(p) = [ M_T  u_T ]   * [ p ]
       [  0    1  ]     [ 1 ]
```

## Homogeneous Coordinates

- affine transformation의 합성은 3×3 행렬 곱셈으로 처리됨

```
(S ∘ T)(p) = [ M_S  u_S ] * [ M_T  u_T ] * [ p ]
             [  0    1  ]   [  0    1  ]   [ 1 ]
```

=>

```
      = [ M_S * M_T        M_S * u_T + u_S ] * [ p ]
        [     0                     1      ]   [ 1 ]
```

- 결과는 이전 방식과 같지만 **훨씬 간단하고 깔끔함**

- 기존 표현과 비교:

```
(S ∘ T)(p) = M_S(M_T * p + u_T) + u_S  
           = (M_S * M_T) * p + (M_S * u_T + u_S)
```

## [Demo] Composition of Affine Transformations in Homogeneous Coordinates

- https://observablehq.com/@esperanc/transformations-demo

- ‘+’ 버튼으로 다양한 순서의 translation 및 linear transformation 추가

- 슬라이더로 행렬 값의 변화와 도형 변형 확인

- 주의: 마지막에 추가된 변환이 **가장 먼저 적용**됨

## Summary: Homogeneous Coordinates in 2D

- 2D 점에는 (x, y)^T 대신 (x, y, 1)^T 사용  
- 2D linear transformation에는 2×2 행렬 대신 **3×3 행렬** 사용  
- 2D translation에도 벡터 덧셈 대신 **3×3 행렬** 사용

→ linear transformation과 translation을  
   **일관된 방식으로 처리할 수 있음!**

## Quiz 2

- Go to https://www.slido.com/  
- Join `#cg-ys`  
- Click "Polls"

- 아래 형식으로 정답을 제출하세요:  
  - Student ID: Your answer  
  - 예: 2021123456: 4.0

- 반드시 위 형식에 맞게 제출해야 출석으로 인정됩니다

# Two Types of 3D Cartesian Coordinate System

## Now, Let’s go to the 3D world!

- Coordinate system (좌표계)  
  - Cartesian coordinate system (직교좌표계)

(이미지: 2D 좌표계 → z축이 포함된 3D 좌표계로 확장됨)

## Right-Handed and Left-Handed Coordinate Systems

- 우리가 사용하는 시스템: **Right-handed Cartesian Coordinates**

| 항목 | Right-handed | Left-handed |
|------|--------------|-------------|
| 회전 방향 | 축 기준 반시계 방향 | 축 기준 시계 방향 |
| 사용 예시 | OpenGL, Maya, Houdini, AutoCAD, Physics & Math | DirectX, Unity, Unreal 등 |

(이미지: 오른손 법칙과 왼손 법칙 설명)

# 3D Affine Transformations

## Point Representations in Cartesian & Homogeneous Coordinate System

|                          | Cartesian coordinate system   | Homogeneous coordinate system    |
|--------------------------|-------------------------------|----------------------------------|
| A 2D point is represented as | [ px  py ]^T                  | [ px  py  1 ]^T                   |
| A 3D point is represented as | [ px  py  pz ]^T              | [ px  py  pz  1 ]^T               |

## Review of Linear Transformations in 2D

- 2D에서의 선형 변환은 다음과 같은 행렬 곱셈으로 표현됨:

**Cartesian coordinates:**

```
[ m11  m12 ]   * [ px ]   = ...
[ m21  m22 ]     [ py ]
```

**Homogeneous coordinates:**

```
[ m11  m12   0 ]   [ px ]  
[ m21  m22   0 ] * [ py ]  
[  0    0    1 ]   [ 1  ]
```

## Linear Transformations in 3D

- 3D에서의 선형 변환은 다음 행렬 곱셈으로 표현됨:

**Cartesian coordinates:**

```
[ m11  m12  m13 ]   [ px ]  
[ m21  m22  m23 ] * [ py ]  
[ m31  m32  m33 ]   [ pz ]
```

**Homogeneous coordinates:**

```
[ m11  m12  m13   0 ]   [ px ]  
[ m21  m22  m23   0 ] * [ py ]  
[ m31  m32  m33   0 ]   [ pz ]  
[  0    0    0    1 ]   [ 1  ]
```

## Linear Transformations in 3D

**Scaling (크기 조절):**

```
S_s = [ Sx  0   0 ]         S_s (in 4x4) = [ Sx  0   0   0 ]
      [ 0  Sy   0 ]                           [ 0  Sy   0   0 ]
      [ 0   0  Sz ]                           [ 0   0  Sz   0 ]
                                              [ 0   0   0   1 ]
```

**Shear (in x, based on z position):**

```
H_xz_d = [ 1   0   d1 ]      H_xz_d (in 4x4) = [ 1   0   d1   0 ]
         [ 0   1   0  ]                          [ 0   1    0   0 ]
         [ 0   0   1  ]                          [ 0   0    1   0 ]
                                                [ 0   0    0   1 ]
```

## Linear Transformations in 3D

**Rotation about x-axis:**

```
R_x(θ) = [ 1      0         0     ]  
         [ 0   cosθ   -sinθ ]  
         [ 0   sinθ    cosθ ]
```

**Rotation about y-axis:**

```
R_y(θ) = [ cosθ   0   sinθ ]  
         [   0     1     0  ]  
         [ -sinθ  0   cosθ ]
```

**Rotation about z-axis:**

```
R_z(θ) = [ cosθ  -sinθ   0 ]  
         [ sinθ   cosθ   0 ]  
         [   0      0     1 ]
```

(오른손 법칙에 따라 z축을 기준으로 위에서 아래로 보는 시점에서 반시계 방향 회전)

## Review of Translations in 2D

- 2D에서의 Translation은 다음 두 방식으로 표현 가능:

**Vector addition (Cartesian coordinates):**

```
[ px ]   +   [ ux ]  
[ py ]       [ uy ]
```

**Matrix multiplication (homogeneous coordinates):**

```
[ 1  0  ux ]   [ px ]  
[ 0  1  uy ] * [ py ]  
[ 0  0   1 ]   [ 1  ]
```

## Translations in 3D

- 3D에서의 Translation도 유사하게 표현 가능:

**Vector addition (Cartesian coordinates):**

```
[ px ]   +   [ ux ]  
[ py ]       [ uy ]  
[ pz ]       [ uz ]
```

**Matrix multiplication (homogeneous coordinates):**

```
[ 1  0  0  ux ]   [ px ]  
[ 0  1  0  uy ] * [ py ]  
[ 0  0  1  uz ]   [ pz ]  
[ 0  0  0   1 ]   [ 1  ]
```

## Review of Affine Transformations in 2D

- Homogeneous coordinates에서는 2D affine transformation을  
  3×3 행렬 곱으로 표현할 수 있음:

```
[ m11  m12  ux ]   ← linear part | translational part
[ m21  m22  uy ]  
[  0    0    1 ]
```

## Affine Transformations in 3D

- Homogeneous coordinates에서는 3D affine transformation을  
  4×4 행렬 곱으로 표현할 수 있음:

```
[ m11  m12  m13  ux ]   ← linear part | translational part
[ m21  m22  m23  uy ]  
[ m31  m32  m33  uz ]  
[  0    0    0    1  ]
```

## Summary: Affine Transformation

- p라는 점 집합에 대해 affine transformation M을 적용하면:

```
p' = M * p

M =
[ m11  m12  m13  t1 ]  
[ m21  m22  m23  t2 ]  
[ m31  m32  m33  t3 ]  
[  0    0    0    1 ]
```

- 각 점마다 개별적으로 적용:

```
p₁′ = M * p₁  
p₂′ = M * p₂  
...  
pₙ′ = M * pₙ
```

(도식: 돌고래 mesh의 각 점에 transform 적용 예시)

## Summary: Composition of Affine Transformations

- 여러 개의 affine transformation (예: M₁, M₂)을 순차적으로 적용할 수 있음

- 각 점마다:

```
p₁′ = M₂ * M₁ * p₁  
p₂′ = M₂ * M₁ * p₂  
...  
pₙ′ = M₂ * M₁ * pₙ
```

(도식: 돌고래 mesh에 두 변환을 순차 적용한 예시)
