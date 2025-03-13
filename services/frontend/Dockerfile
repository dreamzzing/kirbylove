# React Build Stage
FROM node:21 AS build
WORKDIR /app

# package.json과 package-lock.json을 먼저 복사하여 캐시 활용
COPY package.json package-lock.json ./

# npm ci 사용하여 패키지 설치 (더 빠르고 안정적인 방식)
RUN npm ci --no-fund

# 프로젝트 코드 복사 후 빌드
COPY . .
RUN npm run build

# Nginx를 사용하여 정적 파일 서빙
FROM nginx:latest

# default.conf 삭제하고 내가 만든 nginx.conf 사용
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
