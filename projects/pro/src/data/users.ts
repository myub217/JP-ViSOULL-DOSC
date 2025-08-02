// src/data/users.ts

export type User = {
  username: string;
  passwordHash: string;
  role: "admin" | "user" | "staff" | "guest";
};

export const users: User[] = [
  {
    username: "admin2517",
    passwordHash:
      "$2b$10$HrH64tnY.xhpWFCk76VpuOCjrL.xkyfSC8zZS8CAUwSvYPV5n0NJ.",
    role: "admin",
  },
  {
    username: "JPKYETONKEY201",
    passwordHash:
      "$2b$10$ydNoDdpZ5FxX/kMXi0ZKdea7WMLVmTClVdaPlbu/aDpXYaVRjwLvC",
    role: "user",
  },
  {
    username: "JPKYETONKEY222",
    passwordHash:
      "$2b$10$91.voYrra9NVZ9KcAoI5Ue.y1LVar6JCp9YBqawXpfY0pWNNU4QGi",
    role: "user",
  },
  {
    username: "JPKYETONKEY233",
    passwordHash:
      "$2b$10$E45AGVtFiB7U7UKFkdx2fOJuGxfub8ntFm06rJ0eYXFAyx/BDjAe6",
    role: "user",
  },
  {
    username: "JPKYETONKEY244",
    passwordHash:
      "$2b$10$bJwE1FE2YFqJgfjin5jf.eJ7Ln1KqrKExiQBLp4nRmRwhZvKRhAR6",
    role: "user",
  },
  {
    username: "JPKYETONKEY255",
    passwordHash:
      "$2b$10$YmIzBh37655E6O37bXa84OyoztT/xnELbMlAMkNl3/ILn795QR4Cq",
    role: "user",
  },
  {
    username: "JPKYETONKEY266",
    passwordHash:
      "$2b$10$izEFIO3KxXu9MmMqP2jBVu34P889klewXdGoXvnmhE0vy.zs8P0v6",
    role: "user",
  },
  {
    username: "JPKYETONKEY277",
    passwordHash:
      "$2b$10$VeTMz26AR6onnaIQmkdQFu3koOqnpDLSw5X9RCLGICXxPlALbMcXm",
    role: "user",
  },
  {
    username: "JPKYETONKEY288",
    passwordHash:
      "$2b$10$m1.kbmk0X4pVchUa3ahr0O0hIBLfzR5U8Csz3/vzNN9ycMU.lgjB6",
    role: "user",
  },
  {
    username: "JPKYETONKEY299",
    passwordHash:
      "$2b$10$8edEVoTbFi4XD/of4VciC.FGxwbvENez0c4EntNNPy6xYn4hWFr.S",
    role: "user",
  },
  {
    username: "JPKYETONKEY300",
    passwordHash:
      "$2b$10$4Mjr8XSNWgbCT4smM55/KeKrGM1EhBY5OJkgsBbwx3o3dN8UT8.NS",
    role: "user",
  },
  {
    username: "JPusertest01",
    passwordHash:
      "$2b$10$sf7anKiaZB0BkamKIFglSeNsf41X3j.SlNvq050Vf.FtCxvN8YxYq",
    role: "user",
  },
];
