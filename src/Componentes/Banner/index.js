import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.jpeg'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, mundo!
                </h1>

                <p className={styles.paragrafo}>
                Boas vindas ao meu espaço pessoal! Eu sou Alana Motta, estudante de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)

                </p>

            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Foto de Alana Motta'
                />

            </div>
        </div>
    )
}