
import { Container } from 'react-bootstrap'
import blockchain from '../assets/blockchain.png'
import chatbot from '../assets/chat-bot.png'

const Product = () => {
  return (
        <div className='Our-Products'>
            <div className='about-us-title title text-center'>Our Products </div>
            <div className='product-cards'>
                <div className='product-card'>
                    <div className="lines"></div>
                    <div className="imgBx"><img src={blockchain} alt="" /></div>
                    <div className="content">
                        <div className="details">
                        <h2>Blockchain</h2> <br />
                        <p>Blockchain is a decentralized, distributed ledger technology that enables secure, transparent, and tam
                            per-proof transactions.</p>
                            <a href="">View</a>
                        </div>
                    </div>
                </div>
                <div className='product-card'>
                    <div className="lines"></div>
                    <div className="imgBx"><img src={chatbot} alt="" /></div>
                    <div className="content">
                        <div className="details">
                        <h2>Chatbot</h2>
                        <p>Artificial intelligence is a field of computer science that focuses on creating intelligent machines that
                            can perform tasks that typically require human intelligence.</p>
                            <a href="">View</a>
                        </div>
                    </div>
                </div>
                <div className='product-card'>
                    <div className="lines"></div>
                    <div className="imgBx"><img src={blockchain} alt="" /></div>
                    <div className="content">
                        <div className="details">
                        <h2>ROG</h2>
                        <p>RGX is a decentralized, open-source, and community-driven platform that enables the
                        creation, management, and monetization of digital assets.</p>
                        <a href="">View</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Product
