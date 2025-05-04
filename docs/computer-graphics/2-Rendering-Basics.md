# 2 - Rendering Basics

## Summary of Course Intro

- Questions  
  - https://www.slido.com/ - Join #cg-ys

- Quiz  
  - https://www.slido.com/ - Join #cg-ys - Polls  
  - 퀴즈 답안은 정해진 형식으로 제출해야 출석으로 인정함
  - 정답 여부는 출석과 무관함

- Language  
  - 대부분의 슬라이드는 한국어로 **풀이(paraphrase)** 제공

- **"1 – Course Intro.pdf"를 반드시 정독할 것**

## Outline 개요

- Rendering의 기본 개념

- Rendering 방식  
  - Rasterization 래스터화
  - Ray Tracing

## Basic Concepts: Rendering

- **Rendering은 컴퓨터 프로그램을 통해 2D 또는 3D 장면(scene)으로부터 이미지를 생성하는 과정**  
  *(출처: Wikipedia)*

- Rendering 결과물은 다음과 같이 저장 가능:
  - 이미지 파일
  - 영상 파일 (여러 이미지 프레임의 연속)  
  - 또는 **frame buffer**에 저장되어 디스플레이에 출력

## Basic Concepts: Frame Buffer

- **Frame buffer**는 raster 디스플레이 장치에 보낼 비트맵 이미지를 저장하는 메모리 영역

- frame buffer는 다음과 같은 속성으로 정의됨:  
  - 가로, 세로, 깊이  
  - 예: 4K UHD (3840×2160) 해상도, 32bit 컬러 → 3840 × 2160 × 32 bits

- 보통 **그래픽 카드 메모리**에 저장됨

## Basic Concepts: Double Buffering

- 화면 출력과 렌더링을 위해 **두 개의 frame buffer 사용**  
  - 새로운 이미지를 **back buffer**에 그림  
  - 이전 이미지가 출력되는 동안 **front buffer**를 유지  
  - 다음 프레임이 준비되면 두 버퍼를 **스왑(swap)**

- → **프레임 속도 향상**, 또는 **깜빡임(flickering) 감소**

- 대부분의 그래픽 애플리케이션은 **double buffering 사용**

## Basic Concepts: Image Plane

- **Image plane은 가상 3D 장면에서 렌더링된 이미지를 사용자가 보는 실제 디스플레이 화면을 개념적으로 나타내는 평면**

## Example of Rendering a 3D Scene

- 3D Scene 예시 (이미지 참고)  
  - Camera 위치에서 image plane을 통해 장면이 렌더링됨

- Rendering output 예시  
  - (이 이미지는 Colin Behrens가 제작한 Blender 데모 장면 "Loro Mask"를 렌더링한 결과)

## Render Output

- 렌더링 결과는 **picture elements 또는 pixels**로 구성된 **2D 이미지**

- 즉, 렌더링이란 **3D 장면 정보에 기반하여 각 픽셀의 색상을 계산하는 과정**

## Rendering Approaches

- 각 픽셀의 색상을 어떻게 계산할 것인가?

- 주요 접근 방식:
  - Rasterization
  - Ray Tracing

- 학습 기반 장면 표현 방법:
  - **NeRF**: 암시적 3D 장면 표현 학습
  - **Gaussian Splatting**: 포인트 기반 3D 장면 표현 학습

## Rasterization

- **Primitive-by-primitive 방식**

  - primitive 예시: triangle, line, point 등  
  - 각 primitive는 이미지 내 어느 픽셀에 영향을 미치는지를 결정하고 해당 픽셀의 색을 설정함

```py
for each primitive in scene :
    transform the primitive to viewport
    find pixels for the primitive
    set color of the pixels based on texture and lighting model
```

- 예시: 삼각형 하나가 화면에 렌더링됨

## Rasterization Pipeline

- 주요 단계:

  - **Vertex Processing**  
    - vertex를 screen space로 변환

  - **Primitive Processing**  
    - vertex들을 polygon으로 구성

  - **Scan Conversion**  
    - polygon을 fragment 집합으로 변환

  - **Fragment Processing**  
    - 각 fragment의 색상 결정 (텍스처, 조명 모델 등 고려)

  - **Per-sample Operations**  
    - depth test, alpha blending 등 수행

- 흔히 **rendering pipeline 또는 graphics pipeline**이라 부름

## Rendering Pipeline again

- 입력: 각 오브젝트 공간의 vertex

- 처리 순서:  
  - screen space의 vertex  
  - screen space의 primitive  
  - pixel당 하나 이상의 fragment  
  - 색상 계산된 shaded fragments  
  - 최종 출력: image

## Ray Tracing

- **Pixel-by-pixel 방식**

- 카메라 위치에서 image plane 상의 각 픽셀을 통과하는 ray를 생성  
- 해당 ray가 어떤 오브젝트와 교차하는지에 따라 픽셀의 색상이 결정됨

```
for each pixel in image(plane)
  determine which object should be shown at the pixel
  set color of the pixel based on texture and lighting model
```

- 예시: ray 교차 결과가 화면에 렌더링됨

## Ray Tracing

- **Ray tracing에 대한 자세한 설명은 다음 자료 참고**:  
  - "Ray Tracing in One Weekend":  
    https://raytracing.github.io/books/RayTracingInOneWeekend.html

## Rasterization vs. Ray Tracing

- (이미지는 Nvidia에서 제공한 비교 시각화 자료)

## Rasterization – Pros & Cons

- **장점**
  - 삼각형 스트림만 렌더링하면 되므로 전체 장면 데이터를 유지할 필요가 없음
  - 병렬 처리에 적합 → **빠름**

- **단점**
  - 그림자, 반사, 투명도에 대한 통일된 처리 방식이 없음
  - 상대적으로 낮은 품질의 결과물

- **전통적으로 실시간 렌더링에 사용**
  - 예: OpenGL 또는 DirectX 기반 게임

## Ray Tracing – Pros & Cons

- **장점**
  - 그림자, 반사, 투명도 처리 등에서 통합된 방식 제공  
    → Ray와의 교차로 처리됨
  - **고품질 결과물 생성 가능**

- **단점 (전통적 관점)**
  - 실시간 응용에 너무 느림
  - 하드웨어 구현이 어려움

- **전통적으로 영화용 오프라인 렌더링에 사용됨**
  - 예: Maya, Blender 등의 3D 저작 툴을 사용한 애니메이션 영화

## Recent Ray Tracing Technology

- 그러나 이 단점들은 더 이상 완전히 사실이 아님
  - Rasterization보다 느리지만, **실시간도 가능할 만큼 충분히 빠름**
  - 구현은 여전히 어렵지만, **하드웨어가 뒷받침됨**

- **지금은 다음과 같은 것들이 가능**:
  - Nvidia RTX 시리즈와 같은 하드웨어
  - DirectX Raytracing, Vulkan RT 등의 API

- **최근 변화된 흐름**
  - 최초의 실시간 ray tracing 데모 “Reflections”는 **2018년 3월 발표**  
    - https://youtu.be/JMtsYoYoCt3s

## In This Course,

- 강의는 **모든 렌더링 방식에 공통되는** computer graphics의 기본 개념에 초점을 맞춤

  - **Movement & placement**:  
    Transformations, Hierarchical Modeling, Orientation & Rotation,  
    Kinematics & Animation, Curves

  - **Shape & appearance**:  
    Mesh, Lighting, Texture Mapping, Curves

## In This Course,

- 일부 강의는 **rasterization에 특화된 개념**도 다룸

  - **2D 화면으로의 매핑 과정**  
    - Viewing / Projection / Viewport 변환

  - **형상 표현**  
    - Polygon shading

  - **Rasterization 처리 절차**  
    - Rasterization pipeline, Scan Conversion, Visibility

- 실습에서는 여전히 널리 쓰이는 **modern OpenGL** 사용  
  - 강의에서 배운 개념 복습용 도구로 사용됨

## In This Course,

- 이 수업에서는 **ray tracing 또는 learnable scene representation을 다루지 않음**  
  - **실시간 렌더링에서 rasterization은 여전히 중요**  
  - 커버할 시간이 부족함