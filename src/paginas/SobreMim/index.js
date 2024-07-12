import PostModelo from "Componentes/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png';
import styles from './SobreMim.module.css';
import fotoSobreMim from 'assets/sobre_mim_foto.jpg'

export default function SobreMim() {
    return (
        <PostModelo 
            fotoCapa={fotoCapa} 
            titulo="Sobre Mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou Alana!

            </h3>
            <img 
                src={fotoSobreMim}
                alt="foto de Alana Sorrindo"
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
            Olá, meu nome é Alana Motta, tenho 32 anos e sou residente em Curitiba, Paraná. Ao longo da minha carreira, tenho me destacado por minhas habilidades de trabalho em equipe e comunicação eficaz. Sou uma profissional altamente motivada, sempre em busca de oportunidades para aprender e crescer constantemente.
            </p>
            <p className={styles.paragrafo}>
            Meu comprometimento com a aquisição de novos conhecimentos demonstra minha dedicação ao desenvolvimento profissional.
            </p>
            <p className={styles.paragrafo}>
            Fora do ambiente de trabalho, tenho uma paixão por assistir séries e filmes, explorar novos destinos através de viagens, dedicar-me ao crochê e me aventurar na decoração. Esses hobbies não apenas proporcionam equilíbrio à minha vida, mas também refletem minha criatividade e interesse em diferentes formas de expressão.
            </p>
            <p className={styles.paragrafo}>
            Sou estudande de Gestão de Tecnologia da Informação pela PUCPR. Fui co-fundadora de um clube universitário exclusivo para mulheres na área de TI. Organizamos encontros por módulos, promovendo apoio mútuo e encorajamento para fortalecer a presença feminina nesse setor predominantemente masculino.

Nosso clube pe formado por Joyce Mayara Gonçalves de Oliveira, Lyene de Souza Benvenutti, Alana Motta da Cruz (eu) e Joyce Cordeiro Lemos criamos um clube voltado para mulheres que possuem interesse ou já estão cursando a área de TI.
            </p>
            <p className={styles.paragrafo}>
            Minha experiência como Monitora: Como monitora, desempenho um papel crucial no suporte aos meus colegas de faculdade, especialmente nas disciplinas dos cursos de computação. Minhas atividades incluem a criação de resumos personalizados para ajudar os alunos a compreenderem os conteúdos, utilizando ferramentas como o Canva. Também mantenho um canal no YouTube dedicado aos estudos, com playlists específicas para cada disciplina. Estou sempre disponível para responder dúvidas relevantes sobre os conteúdos, e, quando necessário, realizo chamadas individuais com os alunos através do nosso servidor oficial no Discord da PUCPR, bem como via equipe de monitoria no Teams. Além disso, participo ativamente de reuniões com outros monitores, professores e coordenadores, fornecendo feedback sobre os conteúdos abordados e as dificuldades enfrentadas pelos alunos.
            </p>
            <p className={styles.paragrafo}>
            Disciplinas em que exerci ou exerço o papel de monitora: Matemática Aplicada à Computação, Big Data, Desenvolvimento Web, Raciocínio computacional, Banco de dados.
            </p>
            
            
        </PostModelo>
    )
}
