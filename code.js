
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Ticket Dashboard</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

    <main class="contenedorprincipal">

        <!-- HEADER -->
        <header class="header">

            <div class="titulo">
                <h2>Dashboard de Tickets</h2>
                <p>Panel de seguimiento de actividad</p>
            </div>

            <div class="agente">

                <div class="icono-agente">
                    <span>👤</span>
                </div>

                <div class="datos-agente">
                    <span class="etiqueta">AGENTE ACTIVO</span>
                    <h3 id="nombre"></h3>
                </div>

            </div>

        </header>


        <!-- INPUT TICKET -->
        <section class="ticket-section">

            <label for="miInput">Número de ticket</label>

            <input
                type="text"
                id="miInput"
                placeholder="Introduce el número del ticket"
            >

        </section>


        <!-- CONTADORES -->
        <section class="dashboard">


            <div class="card solved">

                <span class="card-icon">✓</span>

                <h1 id="cantidad_Solved">0</h1>
                <h3>Solved</h3>

                <div class="acciones">
                    <button id="sumar_Solved">+</button>
            
                </div>

            </div>


            <div class="card pending">

                <span class="card-icon">◷</span>

                <h1 id="contador_Pending">0</h1>
                <h3>Pending</h3>

                <div class="acciones">
                    <button id="sumar_Pending">+</button>
                   
                </div>

            </div>


            <div class="card hold">

                <span class="card-icon">Ⅱ</span>

                <h1 id="contador_Hold">0</h1>
                <h3>Hold</h3>

                <div class="acciones">
                    <button id="sumar_Hold">+</button>
                    
                </div>

            </div>


            <div class="card chats">

                <span class="card-icon"><i data-lucide="message-square">💬</i></span>

                <h1 id="contador_Chats">0</h1>
                <h3>Chats</h3>

                <div class="acciones">
                    <button id="sumar_Chats">+</button>
                    
                </div>

            </div>


            <div class="card outbound">

                <span class="card-icon">↗</span>

                <h1 id="contador_Outbound">0</h1>
                <h3>Outbound</h3>

                <div class="acciones">
                    <button id="sumar_Outbound">+</button>
                    
                </div>

            </div>


            <div class="card inbound">

                <span class="card-icon">↙</span>

                <h1 id="contador_Inbound">0</h1>
                <h3>Inbound</h3>

                <div class="acciones">
                    <button id="sumar_Inbound">+</button>
                    
                </div>

            </div>


        </section>


        <!-- RESET MEMORY -->
        <div class="reset-container">

            <button id="resetmemory" class="reset-memory">
                ↻ Reset Memory
            </button>

        </div>


    </main>


    <script src="code.js"></script>

</body>
</html>
