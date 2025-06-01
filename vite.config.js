import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Opcia_V2/', // 저장소 이름으로 변경
  plugins: [react()],
});