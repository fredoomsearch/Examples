export const Info = () => {
  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ flex: 1 }}>Public info</h1>
        <p style={{ flex: 1, height: 'vh',
          width: '80vw', }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dignissimos ratione quibusdam sequi adipisci perferendis explicabo, ad nihil? At, iste ad! Illum, aut non.
        </p>
      </div>
      <img
        src="https://img.freepik.com/fotos-premium/increibles-mesas-romanticas-cenar-restaurante-playa-al-aire-libre-bebidas-comida-al-atardecer-cena-pareja_663265-4226.jpg?w=2000"
        alt=""
        style={{
          height: '99vh',
          width: '99vw',
          objectFit: 'cover',
          position: 'absolute',
          zIndex: -1,
        }}
      />
    </div>
  );
};

  