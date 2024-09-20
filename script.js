function mostrarTexto(opcion) {
    let texto;
    let divTextoMostrado = document.getElementById('texto-mostrado');

    let titulo = '';
    switch (opcion) {
        case 'pre-tramite':
            titulo = 'Pre-trámite del título';
            texto = `
              La Subsecretaría de Gestión Académica de Posgrado implementó el pre-trámite, a través del cual se brinda asesoramiento y se verifica la situación del interesado/a de forma previa, agilizando así los tiempos propios del trámite. 
            <strong>No será posible iniciar la solicitud del Diploma sin haber recibido la confirmación de haber finalizado el pre-trámite de forma correcta.</strong>
            <br><br>
            Para este trámite será necesario presentar:
            <ul>
            <li><strong>Diploma de Grado</strong> en formato papel escaneado o digital. En caso de ser egresado de una universidad distinta a la UBA, debe estar previamente legalizado por la <strong>Dirección de Legalizaciones de la UBA</strong>. Si no está legalizado, deberá realizar el trámite accediendo al siguiente <a href="https://tramitesadistancia.uba.ar/tramitesadistancia/tad-publico" target="_blank">enlace</a> y seleccionando la opción "Solicitud para la Legalización de Documentos (REQUIERE PAGO EN CONCEPTO DE LEGALIZACIÓN)".</li>
            <li><strong>Documento de identidad</strong> (DNI argentino u otro documento extranjero) en formato PDF y en tamaño original. El Diploma se expedirá con los mismos datos que figuran en el documento con el cual inició la solicitud, por lo que si tiene alguna tilde o guión, debe estar visible. En caso de errores u omisiones en el Documento Nacional de Identidad argentino relacionados con nombres, apellidos, minúsculas, tildes, apóstrofes, diéresis, etc., o errores en el número del documento, lugar de nacimiento o nacionalidad, deberá realizarse previamente la rectificación del documento en el RENAPER.</li>
            <li><strong>Historia académica</strong> en la que consten todas las asignaturas correspondientes al plan de estudios de la carrera de Especialización o Maestría, con las notas finales correspondientes y sin actas provisorias. Este documento debe solicitarse al <a href="https://fi.uba.ar/posgrado" target="_blank">ente</a> (departamento, escuela o instituto) encargado de dictar su posgrado, declarando haber completado todos los requisitos exigidos por el plan de estudios.</li>
            <li><strong>Certificado de libre deuda</strong> emitido por el <a href="https://fi.uba.ar/posgrado" target="_blank">ente</a>, donde conste que está al día con el pago de la matrícula y las cuotas del posgrado.</li>
            </ul>
            Una vez que reúna toda la documentación, deberá completar el formulario, adjuntando todos los documentos.
            <br>
            <div style="text-align: center; margin-top: 20px; margin-bottom: 30px;">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScNVhuGEy9qGl38qIu45afX53VYE0FBdggGKQPwCgwv1NfS_Q/viewform" target="_blank">
                      <button class="button-start">Completar formulario</button>
                  </a>
              </div>
            `;
            break;
        case 'titulo':
            titulo = 'Trámite del título';
            texto = `
              Una vez que reciba la confirmación que el pre-trámite finalizó de forma correcta, ya puede iniciar el trámite de Título a través del <a href="https://tramitesadistancia.uba.ar/tramitesadistancia/tad-publico" target="_blank">TAD-UBA</a>, filtrando por "Facultad de Ingeniería" y seleccionando "<strong>Solicitud de Expedición de Diplomas de la Facultad de Ingeniería (Requieren Pago trámites iniciados desde el 5.12)</strong>".
              <br><br>
              El inicio del trámite se hace solo de forma virtual y no se toma documentación de forma presencial.
              <br><br>
              Las solicitudes deberán ser acompañadas de:
              <ul>
                  <li>Documento de identidad.</li>
                  <li>Diploma de Grado legalizado en formato papel escaneado o digital.</li>
                  <li>Comprobante de pago emitido por el portal de pagos de la UBA que corresponda al arancel de "Pagar trámites diplomas académicos".
                  </li>
              </ul>
              La presentación de la documentación se realizará bajo declaración jurada, asumiendo la responsabilidad legal y administrativa respecto a la veracidad de la información y de la autenticidad de los documentos originales en soporte papel que obra en su poder.
              <br><br>
              Iniciado el trámite, pasará a la facultad, que deberá verificar el cumplimiento de todos los requisitos establecidos por el plan de estudios, dejando constancia de ello en el expediente electrónico donde tramita la solicitud.
              <br><br>
              Una vez verificado el cumplimiento de todos los requisitos, la Facultad solicitará la expedición del Diploma a la Dirección General de Títulos y Planes de la UBA.
              <br><br>
              Al finalizar el trámite, cada egresado recibirá el Diploma impreso en cartulina, firmado y legalizado digitalmente, considerándose este documento como original en los términos del artículo 11 de la ley 25.506.
              Los Diplomas serán firmados digitalmente con dispositivo criptográfico por las autoridades del Rectorado y de la Facultad.
              <br><br>
              En caso de <u>no contar con DNI argentino</u>, el trámite en la plataforma de Trámites a Distancia deberá comenzarlo a través de un representante con DNI argentino. En caso de no tener un representante designado, deberá contactarse con el <a href="https://fi.uba.ar/posgrado" target="_blank">ente</a> (departamento, escuela o instituto) encargado de dictar su posgrado para que le designen uno.
              <br><br>
              Transcurridos 15 días de iniciado el trámite de Título vía TAD se podrá realizar el seguimiento en el <a href="https://sietgraduados.rec.uba.ar/" target="_blank">SIET</a>, y la UBA podrá solicitar la confirmación de los datos por este medio, por lo cual se deberá ingresar con asiduidad para consultarlo. En caso de no encontrar la información pasados 15 días tendrá que dirigirse a <a href="mailto:posgrado_titulos@fi.uba.ar" target="_blank">posgrado_titulos@fi.uba.ar</a para consultar al respecto.
              <br><br>
              Una vez que el trámite esté finalizado y el Diploma listo para retirar, te enviaremos un mail para infomarte para que entrés en el siguiente <a href="https://forms.gle/cTaEgdxDno83r6Bt6" target="_blank">link</a> y puedas sacar turno para retirarlo.
              <div style="text-align: center; margin-top: 20px; margin-bottom: 30px;">
                  <a href="https://tramitesadistancia.uba.ar/tramitesadistancia/tad-publico" target="_blank">
                      <button class="button-start">Iniciar trámite</button>
                  </a>
              </div>
            `;
            break;
        case 'analitico-final':
            titulo = 'Certificado Analítico Final';
            texto = `
              Deberá iniciar una solicitud a través del TAD-UBA, filtrar por organismo "Facultad de Ingeniería" e ingresar en la opción "<strong>Solicitud de Certificado Académico de Grado y Posgrado a la Facultad de Ingeniería</strong>". 
                <br>Es necesario que indique el lugar exacto (institución, universidad, ente, etc. y país) donde debe ser presentado. Nosotros adjuntaremos el certificado que usted solicitó y se lo entregaremos por el mismo sistema.
                <br><br>
                La demora del trámite depende del ente que dicte su carrera y del tipo de certificado que usted solicite.
                <br><br>
                En caso de que lo requiera legalizado por la UBA y la Secretaría de Educación para poder apostillarlo, debe tener en cuenta que la demora es de varios meses.
                <br>
                <div style="text-align: center; margin-top: 20px; margin-bottom: 30px;">
                    <a href="https://tramitesadistancia.uba.ar/tramitesadistancia/tad-publico" target="_blank">
                        <button class="button-start">Iniciar trámite</button>
                    </a>
                </div>
            `;
            break;
        case 'plan-estudios':
            titulo = 'Plan de Estudios';
            texto = `
              Deberá iniciar una solicitud a través del TAD-UBA, filtrar por organismo "Facultad de Ingeniería" e ingresar en la opción "Solicitud de Certificado Académico de Grado y Posgrado a la Facultad de Ingeniería". Es necesario que indique el lugar exacto (institución, universidad, ente, etc. y país) donde debe ser presentado. Nosotros adjuntaremos el certificado que usted solicitó y se lo entregaremos por el mismo sistema.
                <br><br>
                La demora del trámite depende del ente que dicte su carrera y del tipo de certificado que usted solicite.
                <br><br>
                En caso de que lo requiera legalizado por la UBA y la Secretaría de Educación para poder apostillarlo, debe tener en cuenta que la demora es de varios meses.
                <br>
                <div style="text-align: center; margin-top: 20px; margin-bottom: 30px;">
                    <a href="https://tramitesadistancia.uba.ar/tramitesadistancia/tad-publico" target="_blank">
                        <button class="button-start">Iniciar trámite</button>
                    </a>
                </div>
            `;
            break;
        case 'analitico-parcial':
            titulo = 'Certificado Analítico Parcial';
            texto = `
            Para solicitar este certificado, deberá iniciar una solicitud a través del <a href="https://tramitesadistancia.uba.ar/tramitesadistancia/tad-publico" target="_blank">TAD-UBA</a>, filtrar por organismo "Facultad de Ingeniería" e ingresar en la opción "<strong>Solicitud de Certificado Académico de Grado y Posgrado a la Facultad de Ingeniería</strong>". En esta sección, deberá seleccionar la opción "Certificado Analítico Parcial".
            <br><br>
            Es necesario que indique el lugar exacto (institución, universidad, ente, etc.) y país donde el certificado será presentado y si requiere que esté legalizado por la Dirección de Legalizaciones de la UBA y la Secretaría de Educación, para que pueda ser presentado en el exterior.
            <br><br>
            Una vez que recibamos la solicitud, nos pondremos en contacto desde la correo <a href="mailto:posgrado_certificaciones@fi.uba.ar" target="_blank">posgrado_certificaciones@fi.uba.ar</a> y le solicitaremos una copia de su documento de identidad y del Diploma de Grado, para corroborar sus datos o pedir alguna aclaración en caso de ser necesario.
            <br><br>
            La demora del trámite depende del ente encargado de dictar su carrera o maestría, de la Dirección de Legalizaciones de la UBA y de la Secretaría de Educación de la Nación.
            <br><br>
            <div style="text-align: center; margin-top: 20px; margin-bottom: 30px;">
                <a href="https://tramitesadistancia.uba.ar/tramitesadistancia/tad-publico" target="_blank">
                    <button class="button-start">Iniciar trámite</button>
                </a>
            </div>
            `;
            break;
            case 'alumno-regular': 
            titulo = 'Certificado de Alumno Regular';
            texto = `
            Para solicitar este certificado, deberá iniciar una solicitud a través del <a href="https://tramitesadistancia.uba.ar/tramitesadistancia/tad-publico" target="_blank">TAD-UBA</a>, filtrar por organismo "Facultad de Ingeniería" e ingresar en la opción "<strong>Solicitud de Certificado Académico de Grado y Posgrado a la Facultad de Ingeniería</strong>". En esta sección, deberá seleccionar la opción "Certificado de Alumno Regular".
            <br><br>
            Es necesario que indique el lugar exacto (institución, universidad, ente, etc.) y país donde el certificado será presentado y si requiere que esté legalizado por la Dirección de Legalizaciones de la UBA y la Secretaría de Educación, para que pueda ser presentado en el exterior.
            <br><br>
            Una vez que recibamos la solicitud, nos pondremos en contacto desde la correo <a href="mailto:posgrado_certificaciones@fi.uba.ar" target="_blank">posgrado_certificaciones@fi.uba.ar</a> y le solicitaremos una copia de su documento de identidad y del Diploma de Grado, para corroborar sus datos o pedir alguna aclaración en caso de ser necesario.
            <br><br>
            La demora del trámite depende del ente encargado de dictar su carrera o maestría, de la Dirección de Legalizaciones de la UBA y de la Secretaría de Educación de la Nación.
            <br><br>
            <div style="text-align: center; margin-top: 20px; margin-bottom: 30px;">
                <a href="https://tramitesadistancia.uba.ar/tramitesadistancia/tad-publico" target="_blank">
                    <button class="button-start">Iniciar trámite</button>
                </a>
            </div>
            `;
            break; 
        default:
            texto = '';
    }
    
    divTextoMostrado.innerHTML = `
        <h2 style="text-align: center; font-weight: bold; text-decoration: underline; margin-top: 20px;">${titulo}</h2>
        ${texto}
    `;
    divTextoMostrado.style.display = 'block';
}
