FROM hayd/alpine-deno:1.9.1

WORKDIR /app

ENV PORT=8000

COPY . .

CMD ["deno", "run", "-A", "--unstable", "--allow-net", "app.ts"]

EXPOSE ${PORT}
