const Home = () => {
  return (
    <>
      <header>
        <nav>
            <a href="#top" className="brand">
                Moto<span>Shop</span>
            </a>

            <div className="user-actions">
                <a href="cuenta.html" className="btn-user" title="Iniciar sesión o Registrarse">
                    <span>👤</span> Mi Cuenta
                </a>
                <a href="carrito.html" className="btn-cart" title="Ver Carrito de Compras">
                    <span>🛒</span> Carrito <span id="contador-carrito">0</span>
                </a>
            </div>
        </nav>
    </header>

    <main>
        <section className="hero">
            <span className="hero-tag">Equipamiento de alto rendimiento</span>
            <h2>Protección, estilo y actitud sobre dos ruedas</h2>
            <p>Cascos certificados, indumentaria técnica y accesorios seleccionados para rodar seguro y con la mejor presencia.</p>
            <a href="#catalogo" className="btn-hero">Explorar Catálogo</a>
        </section>

        <section id="catalogo">
            <div className="section-title">
                <h2>Nuestra Colección</h2>
                <p>Equipamiento homologado y accesorios probados en pista y ciudad</p>
            </div>

            <section className="category-block">
                <h3>Cascos Certificados</h3>
                <div className="products-grid">
                    
                    <article className="product-card">
                        <div className="img-wrapper">
                            <span className="badge">ECE 22.06</span>
                            <img src="img/Casco AGV K3 Solid.png" alt="Casco integral AGV K3 Negro Mate">
                        </div>
                        <div className="card-content">
                            <h4>Casco AGV K3 Solid</h4>
                            <p className="specs">Calota termoplástica de alta absorción, visor anti-rayas y ventilación optimizada.</p>
                            <p className="price">$259.900 CLP</p>
                            <div className="card-actions">
                                <button type="button" className="btn-secondary">Detalle</button>
                                <button type="button" className="btn-primary">Añadir 🛒</button>
                            </div>
                        </div>
                    </article>

                    <article className="product-card">
                        <div className="img-wrapper">
                            <span className="badge premium">Premium</span>
                            <img src="img/Casco Shoei GT-Air 3.png" alt="Casco Shoei GT-Air 3">
                        </div>
                        <div className="card-content">
                            <h4>Casco Shoei GT-Air 3</h4>
                            <p className="specs">Calota AIM multifibra orgánica, visor solar interno QSV-2 y acústica de alta gama.</p>
                            <p className="price">$699.000 CLP</p>
                            <div className="card-actions">
                                <button type="button" className="btn-secondary">Detalle</button>
                                <button type="button" className="btn-primary">Añadir 🛒</button>
                            </div>
                        </div>
                    </article>

                </div>
            </section>

            <section className="category-block">
                <h3>Chaquetas, Guantes y Protecciones</h3>
                <div className="products-grid">
                    
                    <article className="product-card">
                        <div className="img-wrapper">
                            <span className="badge">Impermeable</span>
                            <img src="img/Chaqueta Alpinestar Andes V3.jpg" alt="Chaqueta Alpinestars Andes V3">
                        </div>
                        <div className="card-content">
                            <h4>Chaqueta Alpinestars Andes V3</h4>
                            <p className="specs">Membrana Drystar impermeable, forro térmico desmontable y protecciones Nucleon Flex.</p>
                            <p className="price">$319.900 CLP</p>
                            <div className="card-actions">
                                <button type="button" className="btn-secondary">Detalle</button>
                                <button type="button" className="btn-primary">Añadir 🛒</button>
                            </div>
                        </div>
                    </article>

                    <article className="product-card">
                        <div className="img-wrapper">
                            <span className="badge">Cuero</span>
                            <img src="img/Guantes Alpinestars Faster.jpg" alt="Guantes Alpinestars Faster">
                        </div>
                        <div className="card-content">
                            <h4>Guantes Alpinestars Faster</h4>
                            <p className="specs">Cuero de alta durabilidad, inserciones elásticas y protección rígida en nudillos.</p>
                            <p className="price">$89.000 CLP</p>
                            <div className="card-actions">
                                <button type="button" className="btn-secondary">Detalle</button>
                                <button type="button" className="btn-primary">Añadir 🛒</button>
                            </div>
                        </div>
                    </article>

                    <article className="product-card">
                        <div className="img-wrapper">
                            <span className="badge">Articuladas</span>
                            <img src="img/Rodilleras Scoyco K12.png" alt="Rodilleras Scoyco K12">
                        </div>
                        <div className="card-content">
                            <h4>Rodilleras Scoyco K12</h4>
                            <p className="specs">Carcasa anatómica de polipropileno con doble pivote y ajuste ergonómico seguro.</p>
                            <p className="price">$42.900 CLP</p>
                            <div className="card-actions">
                                <button type="button" className="btn-secondary">Detalle</button>
                                <button type="button" className="btn-primary">Añadir 🛒</button>
                            </div>
                        </div>
                    </article>

                </div>
            </section>

            <section className="category-block">
                <h3>Accesorios y Personalización</h3>
                <div className="products-grid">
                    
                    <article className="product-card">
                        <div className="img-wrapper">
                            <span className="badge">Protector</span>
                            <img src="img/Kit Tank Pad Resina 3D.png" alt="Kit Protectores de Estanque">
                        </div>
                        <div className="card-content">
                            <h4>Kit Tank Pad Resina 3D</h4>
                            <p className="specs">Resina epóxica anti-rayas para tanque de combustible. Resistente al clima y lavados.</p>
                            <p className="price">$24.900 CLP</p>
                            <div className="card-actions">
                                <button type="button" className="btn-secondary">Detalle</button>
                                <button type="button" className="btn-primary">Añadir 🛒</button>
                            </div>
                        </div>
                    </article>

                    <article className="product-card">
                        <div className="img-wrapper">
                            <span className="badge fun">Divertido</span>
                            <img src="img/Patito Motociclista para Manillar.png" alt="Patito motociclista de goma con casco y hélice">
                        </div>
                        <div className="card-content">
                            <h4>Patito Motociclista para Manillar</h4>
                            <p className="specs">Accesorio de goma con casco de hélice giratoria, luz LED y silbato de alerta.</p>
                            <p className="price">$6.900 CLP</p>
                            <div className="card-actions">
                                <button type="button" className="btn-secondary">Detalle</button>
                                <button type="button" className="btn-primary">Añadir 🛒</button>
                            </div>
                        </div>
                    </article>

                    <article className="product-card">
                        <div className="img-wrapper">
                            <span className="badge">1:12 Diecast</span>
                            <img src="img/Moto a Escala Yamaha R1 (Maisto).png" alt="Maqueta Yamaha YZF-R1 Maisto">
                        </div>
                        <div className="card-content">
                            <h4>Moto a Escala Yamaha R1 (Maisto)</h4>
                            <p className="specs">Réplica en metal fundido y partes plásticas articuladas. Coleccionable oficial.</p>
                            <p className="price">$19.990 CLP</p>
                            <div className="card-actions">
                                <button type="button" className="btn-secondary">Detalle</button>
                                <button type="button" className="btn-primary">Añadir 🛒</button>
                            </div>
                        </div>
                    </article>

                </div>
            </section>
        </section>
    </main>
    </>
    );
};

export default Home;