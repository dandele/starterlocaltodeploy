import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Come si scrive una presentazione?</p>
          <p>Non lo so, quando le persone mi chiedono di parlargli di me o presentarmi mi trovo sempre in imbarazzo. Credo però che mai come in questa occasione e su questo sito sia doveroso da parte mia dirti almeno qualche cosa sul mio conto. Come probabilmente avrai intuito quello che vedi nella foto in cima a questo testo sono io: ho 26 anni e abito ad Eboli, in provincia di Salerno. Come ogni nerd che si rispetti ho da sempre una grande passione per il digitale e per la lettura. </p> 
          <p>Penso, pero', che definirmi solo un nerd sia riduttivo: sono un <strong>nerd,</strong> infatti, tanto quanto sono un <strong>creativo.</strong> </p> 
          <p>Questa mia creatività, pero', è sempre rimasta nascosta sotto strati e strati di razionalità, di calcolo, di videogames, di saghe fantasy e se qualche anno mi avessero chiesto:"Ti ritieni una persona creativa?" la mia risposta sarebbe stata "no". Avevo fin troppa paura di "creare". </p> 
          <h3>Poi, come spesso accade, la vita si è messa di mezzo.</h3>
          <p>Fin da quando ero bambino il mio sogno era stato diventare un <strong>giornalista</strong> ed ho intrapreso studi e carriera universitaria proprio cercando di raggiungere questo obiettivo. Subito dopo il conseguimento della laurea triennale però la vita ha bussato alla mia porta. </p>
          <p>La mia attività di tirocinio, presso un quotidiano di cronaca locale online, si è trasformata col tempo in un incubo: ho capito (ahimé solo dopo averlo "raggiunto") che il mio sogno non era davvero quello di essere un giornalista e che avevo un'idea fin troppo "romantica" e anacronistica rispetto alla cronaca di oggi. </p> 
          <p>Ho interrotto, quindi, la collaborazione col quotidiano e mi sono affacciato in un mondo in cui, improvvisamente, non avevo più obiettivo. </p>
          <p>È proprio in questo momento che entra nella mia vita la <strong>creatività.</strong> </p>
          <p>Ho deciso che ero fin troppo giovane per ritenermi un "fallito" e permettere alla disillusione di lasciarmi a terra e quindi mi sono abbandonato. </p>
          <p>Ho ricominciato a leggere, mi sono iscritto all'università per prendere la laurea magistrale e, soprattutto, ho iniziato a studiare e cercare di acquisire tutte le abilità che avevo sempre desiderato di acquisire. </p>
          <p>Disegno, scrittura, fotografia, montaggio video, suonare uno strumento musicale (una chitarra e poi un'armonica da bocca): se avevo mai desiderato imparare a fare qualcosa mi ci buttavo, se poi mi piaceva continuavo altrimenti scartavo e passavo alla prossima abilità. Non c'era un obiettivo, non c'era un premio, lo facevo per esplorare. </p> 
          <p>Tra tutte queste cose provate alcune di quelle che più mi hanno colpito (e che sono rimaste) è stata la fotografia: ho cominciato a fare foto, giocare con Photoshop e da Photoshop sono passato ad Illustrator e poi a Premiere Pro, facevo le foto (o i video) le editavo e i risultati li pubblicavo <a href="https://www.instagram.com/dandele93/"><strong>sulla mia bacheca instagram</strong></a>., tutti i giorni, non ne saltavo nemmeno uno.</p>
          <p>Proprio questa mia <strong>gestione del profilo Instagram</strong> mi ha permesso poi di chiudere il primo cliente da social media manager freelance e dopo questo è poi arrivato il secondo! </p>
          <p>Scoprire questa vena creativa in me è stato come aprire un vaso di Pandora: dagli editing su Photoshop dopo qualche mese sono passato ad Html, Css e Javascript continuando ad acquisire abilità e competenze spinto dalla sola curiosità e voglia di imparare </p>
          <p>Ed è così, quindi, che ho scoperto la mia vera passione (o almeno la sua più attuale declinazione): creare siti su misura!</p>
          <p>Non sono un programmatore, non sono neanche un grafico, non sono marketer e non sono neanche un social media manager (pur avendo le competenze di ognuna di queste figure professionali non rappresento in maniera "pura" nessuna di queste, se cerchi "purezza" allora io non ti posso accontentare): sono qualcuno che cerca di unire queste cose cercando di creare e fornire il prodotto che più possa essere utile a TE ed alle tue esigenze </p>
          <p>Se sei arrivato fino a qui, quindi, innanzitutto ti faccio i miei complimenti per la pazienda e ti invito, poi, a vedere nel dettaglio quali sono stati i progetti cui ho lavorato e che più mi hanno lasciato qualcosa o se vuoi passare direttamente all'azione puoi mandarmi una mail cliccando qui. </p>
          <h4 className="major">Aggettivi che mi definiscono</h4>
          <ul style={{listStyleType: "square"}}>
            <li>Bellissimo, brillante, intelligente, bellissimissimo (per mia madre);</li>
            <li>Antipatico (per la mia ragazza, quando è arrabbiata);</li>
            <li>Furbo;</li>
            <li>Simpatico (a piccole dosi);</li>
            <li>Prolisso;</li>
            <li>Gentile;</li>
            <li>Riflessivo;</li>
            <li>Rilassato;</li>
            <li>Paziente;</li>
            <li>Filosofico (ogni volta che me lo dicono rispondo:"In che senso?");</li>
            <li>Saggio (anche in questo caso quando me lo dicono rispondo:"In che senso?");</li>
            <li>Stupido (per te dopo che avrai letto tutte le volte che io rispondo "In che senso?" quando mi viene dato un aggettivo);</li>
            <li>Nerd (per chiunque parli con me anche solo 5 minuti, dopo il mio ennesimo riferimento a telefilm, film, libri o videogiochi;</li>
          </ul>
          <h4 className="major">Libri preferiti</h4>
              <ul style={{listStyleType: "square"}}>
                <li>Saga di Harry Potter - J.K.Rowling</li>
                <li>L'ombra dello scorpione - Stephen King</li>
                <li>American Gods - Neil Gaiman</li>
                <li>La sottile arte di fare quel che c**** ti pare - Mark Manson</li>
              </ul>
          <h4 className="major">La mia citazione preferita</h4>
          <blockquote>"Make good art." - Neil Gaiman</blockquote>
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">I miei progetti</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <h3>Cliente: Calogico Pellet</h3>
          <h4><strong>Come può una grande azienda, già affermata, con clienti già chiusi (ma che non sono molto "digitali") insegnare a questi clienti come fare ordini online?</strong></h4>
          <p>Questa è la domanda, e <strong>l'urgenza</strong>, principale che l'amministratore di Calogico Pellet (Bioenergy) mi ha posto quando ci siamo incontrati. ~{"\n"} 
          Non si trattava di acquisire clienti, o meglio, non solo di quello. Matteo (uno dei fondatori dell'azienda) voleva "scolarizzare" i suoi clienti portandoli ad interagire il più possibile attraverso le piattaforme digitali.</p>
          <h4>In che modo arrivarci? Il compito di capirlo spettava a me</h4>
          <p></p>
          <p>Mi è capitato di conoscere, sia come semplice utente che come "collaboratore", parecchie attività imprenditoriali piccole, medie o grandi. La cosa che però più mi ha colpito, in particolare in questi anni, è come gran parte di queste siano impreparate all'enorme rivoluzione digitale di questi ultimi anni. 
          È colpa dei dirigenti? Degli impiegati? Non posso dirlo precisamente (nè questo penso sia il luogo più adatto per fare questo tipo di dissertazioni) una cosa però è sicura: come spesso accade nella vita non conta il fatto che cadi, ma che ti rialzi!</p>
          <h4>Valutazione delle risorse</h4>
          <p>Prima di lanciarmi nella creazione di piani, di strategie e mettermi al lavoro dovevo capire, innanzitutto da cosa partire. Il <strong>sito web</strong> è l'hub principale della presenza digitale di un'azienda sul web, dovevo valutare la qualità del sito di Calogico Pellet e se, innanzitutto, ce ne fosse uno.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main