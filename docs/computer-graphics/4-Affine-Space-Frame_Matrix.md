# 4 - Affine Space / Frame / Matrix

## Outline

- Affine Space - Point vs. Vector  
- Coordinate System & Reference Frame  
- Affine Transformation Matrix  
- Interpretation of Composite Transformations

## Affine Space - Point vs. Vector

- 개념적으로 **point와 vector는 매우 다름**

- 이 차이는 **homogeneous coordinates**로 표현할 수 있음

- 이 강의에서는 affine space,  
  **point와 vector의 차이점**,  
  그리고 그것이 homogeneous coordinates와  
  어떻게 연결되는지를 학습함

- 이 개념은 coordinate invariant 또는  
  coordinate-free geometric programming이라고도 불림

(출처: http://mrl.snu.ac.kr/courses/CourseGraphics/index_2017spring.html)

## Points

- Point p, Point q

- 이 두 점을 더한 **“sum”**은 무엇인가?

## If you assume coordinates, …

- p = (x₁, y₁), q = (x₂, y₂)

- 합: (x₁ + x₂, y₁ + y₂)

→ 이게 맞는가?  
→ **기하학적으로 의미가 있는가?**

## If you assume coordinates, …

- 동일한 좌표 표현에서,

- p = (x₁, y₁), q = (x₂, y₂)

- (x₁ + x₂, y₁ + y₂)는 단순한 합이 아닌,  
  **원점에서 p와 q까지 가는 vector의 합**으로 간주해야 함

→ **Vector sum**

## If you select a different origin, …

- p = (x₁, y₁), q = (x₂, y₂)

- (x₁ + x₂, y₁ + y₂)의 의미는  
  **좌표계(원점)가 어디인지에 따라 달라짐**

- 즉, **다른 coordinate frame을 선택하면 결과도 달라짐**

## Points and Vectors

- **point**는 좌표값으로 정의된 위치

- **vector**는 두 점 사이의 차이로 정의됨

- 원점이 정의되었다면, point는  
  원점에서 해당 point까지의 **vector로 표현 가능**

- 하지만 coordinate-free 관점에서는  
  **point는 vector가 아님**

## Points & Vectors are Different!

- 수학적(또는 물리적)으로,

  - **Point는 공간상의 위치**  
  - **Vector는 공간상의 변위**

- 시간에 비유하면 다음과 같음:

  - **datetime은 시간의 위치**  
  - **duration은 시간의 변위**

## Vector and Affine Spaces

- **Vector space**  
  - 벡터와 그 연산 포함  
  - 점은 포함하지 않음

- **Affine space**  
  - vector space의 상위 개념  
  - 벡터, 점, 그에 관련된 연산 모두 포함

## Vector spaces

- A **vector space**는 다음으로 구성됨:

  - 벡터 집합과  
  - 두 가지 연산:
    - 벡터 간 덧셈
    - 스칼라 곱

- **벡터들의 선형 결합(linear combination)** 또한 벡터임

```
u₀, u₁, ..., uₙ ∈ V ⇒  
c₀u₀ + c₁u₁ + ... + cₙuₙ ∈ V
```

## Affine Spaces

- An **affine space**는 다음으로 구성됨:

  - 점들의 집합, 관련된 벡터 공간,  
  - 두 가지 연산:
    - 두 점의 차  
    - 점 + 벡터

## Coordinate-Free Geometric Operations

- 덧셈 (Addition)  
- 뺄셈 (Subtraction)  
- 스칼라 곱 (Scalar multiplication)

## Addition

- u + v → **벡터**

- p + w → **점**

- u, v, w: vectors  
- p, q: points

## Subtraction

- u − v → 벡터  
- p − q → 벡터  
- p − w → 점

(단, u, v, w: vectors / p, q: points)

## Scalar Multiplication

- **스칼라 × 벡터 = 벡터**  
- **1 × 점 = 점**  
- **0 × 점 = 벡터**  
- **c × 점 = 정의되지 않음** (단, c ≠ 0, 1일 때)

## Affine Frame

- A **frame**은 다음으로 정의됨:

  - 벡터들의 집합 {vᵢ}, i = 1, ..., N  
  - 기준이 되는 점 o

- {vᵢ}는 해당 vector space의 **basis**  
- o는 해당 frame의 **origin**  
- N은 affine space의 **차원**

- 임의의 점 p는 다음과 같이 표현됨:

```
p = o + c₁v₁ + c₂v₂ + ... + cₙvₙ
```

- 임의의 벡터 v는 다음과 같이 표현됨:

```
v = c₁v₁ + c₂v₂ + ... + cₙvₙ
```

## Summary

- Affine space에서:

```
point + point = 정의되지 않음  
point − point = vector  
point + vector = point  
vector + vector = vector  
scalar × vector = vector  
scalar × point =  
  - point (if scalar = 1)  
  - vector (if scalar = 0)  
  - undefined (otherwise)
```

## Points & Vectors in Homogeneous Coordinates

- Homogeneous coordinates에서는,

  - **3D point**: (x, y, z, **1**)  
  - **3D vector**: (x, y, z, **0**)

→ 이 표현은 coordinate-free geometric programming의  
   개념과 **완전하게 일치하는 모델**을 제공함

## Points & Vectors in Homogeneous Coordinates

예시:

```
( x₁, y₁, z₁, 1 ) + ( x₂, y₂, z₂, 1 ) = ( x₁ + x₂, y₁ + y₂, z₁ + z₂, 2 ) → point (정의 안 됨)  
( x₁, y₁, z₁, 1 ) − ( x₂, y₂, z₂, 1 ) = ( x₁ − x₂, y₁ − y₂, z₁ − z₂, 0 ) → vector  
( x₁, y₁, z₁, 1 ) + ( x₂, y₂, z₂, 0 ) = ( x₁ + x₂, y₁ + y₂, z₁ + z₂, 1 ) → point  
( x₁, y₁, z₁, 0 ) + ( x₂, y₂, z₂, 0 ) = ( x₁ + x₂, y₁ + y₂, z₁ + z₂, 0 ) → vector  
c × ( x, y, z, 0 ) = ( cx, cy, cz, 0 ) → vector  
c × ( x, y, z, 1 ) = ( cx, cy, cz, c ) →  
  - point (if c = 1)  
  - undefined (if c ≠ 0,1)
```

## Points & Vectors in Homogeneous Coordinates

- Affine transformation matrix × point, vector:

```
[ M  t ]   [ p ]   = [ M * p + t ] → point  
[ 0ᵀ 1 ]   [ 1 ]             [ 1 ]

[ M  t ]   [ v ]   = [ M * v     ] → vector  
[ 0ᵀ 1 ]   [ 0 ]             [ 0 ]
```

→ **translation은 vector에는 적용되지 않음!**

## Quiz 1

# Coordinate System & Reference Frame

## Coordinate System & Reference Frame

- **Coordinate system**  
  - 점의 위치를 고유하게 결정하기 위해  
    하나 이상의 숫자 또는 좌표를 사용하는 체계

- **Reference frame**  
  - 추상적인 좌표계 + 실제 기준점  
  - 좌표계를 고정시키기 위해 사용됨

- 이 두 용어는 종종 혼용되지만,  
  **의미에는 약간의 차이**가 있음

## World / Body Frame (or Coordinate System)

- **World frame (or coordinate system)**  
  - 세계에 고정된 좌표계  
  - aka. global frame, fixed frame

- **Body frame (or coordinate system)**  
  - 물체에 고정된 좌표계  
  - aka. local frame

(예시 이미지: world frame과 body frame의 차이)

# Affine Transformation Matrix

## Meanings of Affine Transformation Matrix

- **하나의 affine transformation matrix**는  
  **여러 관점에서 해석 가능함**

## 1) Affine Transformation Matrix Transforms a Geometry w.r.t. World Frame

- 행렬 M은 **기하 객체의 각 vertex 위치를**  
  **world frame 기준에서 새로운 위치로 변환**

- 변환 포함: translate, rotate, scale 등

```
M =
[ m11  m12  m13  tx ]  
[ m21  m22  m23  ty ]  
[ m31  m32  m33  tz ]  
[  0    0    0   1  ]
```

- M을 곱하면 geometry가 world frame에서  
  **다른 위치로 이동된 결과를 얻음**

## Review: Affine Frame

- **Affine frame** (3D 공간 기준)은 다음으로 정의됨:

  - x, y, z 축을 나타내는 3개의 벡터  
  - 1개의 원점 위치

(도식: 세 벡터 + 한 점)

## World Frame

- **World frame**은 보통 다음으로 표현됨:

  - 표준 축 벡터  
    - êₓ = [1 0 0]ᵀ  
    - êᵧ = [0 1 0]ᵀ  
    - ê𝓏 = [0 0 1]ᵀ  
  - 원점 위치: 0

(도식: 원점에서 출발하는 세 축 벡터)

## Let’s transform a "world frame"

- M을 **world frame에 곱하면**,  
  x, y, z 축 벡터 및 원점에 각각 곱해지며 프레임이 변환됨:

```
x axis vector:
M × [1 0 0 0]ᵀ = 첫 번째 column  
y axis vector:
M × [0 1 0 0]ᵀ = 두 번째 column  
z axis vector:
M × [0 0 1 0]ᵀ = 세 번째 column  
origin point:
M × [0 0 0 1]ᵀ = 네 번째 column
```

## 2) Affine Transformation Matrix Defines an Affine Frame w.r.t. World Frame

- 행렬 M은 **Affine Frame을 정의함**  
  - (기준 프레임 {0} 기준으로 표현된 {1} 프레임)

- M의 각 column은 다음을 나타냄:

  - 첫 3개 column: 축 벡터  
  - 마지막 column: 원점 위치

→ M은 **변환된 body frame {1}을 world frame {0} 기준으로 표현한 것**

## Examples

- 같은 물체의 body frame이 두 가지 방식으로 정의됨:

  - (a) world frame과 body frame이 일치할 때  
  - (b) body frame이 다른 위치에서 정의될 때

→ 두 경우 모두 M은 body frame을 world frame 기준으로 표현함

## 3) Affine Transformation Matrix Transforms a Point Represented in an Affine Frame to the Same Point (but) Represented in World Frame

- p^{(1)} = (1, 1, 0): body frame {1} 기준에서 본 점  
- M을 곱하면:

```
p^{(0)} = M * p^{(1)}
```

- 즉, 같은 점을 world frame {0} 기준에서 표현한 것

## 3) Affine Transformation Matrix Transforms a Point Represented in an Affine Frame to the Same Point (but) Represented in World Frame Because...

- 동일한 물체를 body frame 기준에서 보다가  
  M을 통해 **world frame 기준 표현**으로 변환한 것

```
p^{(0)} = M * p^{(1)}
```

- 단순히 geometry를 변환한 이야기임

## Directions of the "arrow"

- **첫 번째 의미 (1st meaning)**  
  - geometry 자체를 transform (frame은 그대로)  
  - M은 변환의 방향을 나타냄: {0} → {1}

→ p^{(1)}가 변환되어 p^{(0)}이 됨

## Directions of the "arrow"

- **두 번째 의미는 frame 자체의 변환**  
  - {1} 프레임이 {0} 기준으로 어떻게 보이는지를 나타냄

- **세 번째 의미 (3rd meaning)**  
  - **p라는 점이 표현되는 프레임 자체를 바꾸는 과정**

→ "표현의 기준"이 바뀜: {1}에서 본 p를  
   {0}에서 본 p로 변환하는 것

## Quiz 2

## All these concepts work even if the starting frame is not world frame!

- 시작 프레임이 world frame이 아니어도, 지금까지의 모든 개념은 그대로 적용 가능

## {0} to {1}

- M₁은 다음을 수행:

  1) 프레임 {0} 기준에서 geometry를 변환  
  2) 프레임 {0} 기준에서 프레임 {1}을 정의  
  3) 프레임 {1} 기준의 점을 {0} 기준으로 표현  
     - p^{(0)} = M₁ * p^{(1)}

## {1} to {2}

- M₂는 다음을 수행:

  1) 프레임 {1} 기준에서 geometry를 변환  
  2) 프레임 {1} 기준에서 프레임 {2}를 정의  
  3) 프레임 {2} 기준의 점을 {1} 기준으로 표현  
     - p^{(1)} = M₂ * p^{(2)}

## {0} to {2}

- M₁M₂는 다음을 수행:

  1) 프레임 {0} 기준에서 geometry를 변환  
  2) 프레임 {0} 기준에서 프레임 {2}를 정의  
  3) 프레임 {2} 기준의 점을 {0} 기준으로 표현  
     - p^{(0)} = M₁ * M₂ * p^{(2)}

# Interpretation of Composite Transformations

## Revisit: Order Matters!

- T, R이 affine transformation을 나타내는 행렬일 때:

```
p' = T * R * p
  → 먼저 R 적용 (p → R(p)), 그 후 T 적용

p' = R * T * p
  → 먼저 T 적용 (p → T(p)), 그 후 R 적용
```

- → **행렬의 곱셈 순서는 매우 중요함!**  
  - 곱셈은 결합법칙은 성립하지만 교환법칙은 성립하지 않음 (AB ≠ BA)

## Interpretation of Composite Transformations #1

- 예제 변환:  
  M = T(x,3) · R(−90°)

- 우리가 지금까지 해석한 방식:  
  - **R → T 순서로** 적용  
  - R은 world frame 기준 변환

```
p → R(−90°)(p) → T(x,3) 적용 → p' = T(R(p))
```

## Interpretation of Composite Transformations #2

- 예제 변환 동일:  
  M = T(x,3) · R(−90°)

- **다른 해석 방식**:  
  - R → T 순서가 아닌, **T → R** 순서로 해석  
  - 즉, **body frame 기준**에서 해석하는 방식

```
p → T(p) → R(T(p)) = M(p) = p'
```

- → 동일한 행렬이라도 **기준 프레임에 따라 해석이 달라질 수 있음**

## Pre-(left) & Post-(right) Multiplication

```
p' = M₁M₂p  (pre-multiplication by M₁)
→ R-to-L 순서
```

1) M₂를 **world frame 기준**으로 적용하여 p를 변환  
2) 그 결과를 M₁을 통해 **world frame 기준**으로 다시 변환

→ 전체 변환은 **M₁M₂**


```
p' = M₁M₂p  (post-multiplication by M₁)
→ L-to-R 순서
```

1) p는 body frame {1} 기준에서 표현되어 있고,  
   M₁은 **body frame {1}을 world frame 기준으로 업데이트**함  
2) M₂는 body frame {2}로 업데이트함  
3) 결과적으로 p는 body frame {2}에서 표현됨

→ 전체 변환은 **M₁M₂**

**또 다른 유용한 해석법**

1) M₁을 world frame 기준으로 적용하여 **body frame을 M₁으로 업데이트**  
2) M₂를 world frame 기준으로 적용하여 **body frame을 M₁M₂로 업데이트**  
3) p를 새 body frame M₁M₂ 기준으로 위치시킴

## [Demo] L-to-R & R-to-L Interpretation

https://observablehq.com/@esperanc/transformation-demo

- 다양한 순서로 translation 및 선형 변환 추가 ( '+' 버튼 사용)  
- 슬라이더를 드래그하여 행렬 값의 변화 및 도형의 변화를 관찰  
- 합성 변환의 의미를 **L-to-R**, **R-to-L** 순서로 해석해보세요

<home/>