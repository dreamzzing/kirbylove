# Java 21 기반 Gradle 빌드 (Debian 기반)
FROM openjdk:21-slim AS build

WORKDIR /app
COPY . .

# 필수 패키지 설치 (xargs 포함)
RUN apt update && apt install -y coreutils findutils

# Gradle 실행 권한 부여
RUN chmod +x gradlew

# Gradle 빌드 실행 (테스트 제외)
RUN ./gradlew clean build -x test

# 실행 단계
FROM openjdk:21-slim
WORKDIR /app

# 빌드된 JAR 파일 복사
COPY --from=build /app/build/libs/*.jar app.jar

# 컨테이너 실행 시 JAR 실행
CMD ["java", "-jar", "app.jar"]
