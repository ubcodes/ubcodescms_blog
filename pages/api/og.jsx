import { ImageResponse } from '@vercel/og';
 
export const config = {
  runtime: 'edge',
};
 
const image = fetch(new URL('../../public/logo1.png', import.meta.url)).then((res) =>
  res.arrayBuffer(),
);
 
export default async function handler() {
  const imageData = await image;
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          background: '#000',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <picture>
          <img  alt='Ubcodes' src={imageData} width="1200" height="630" />
        </picture>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}