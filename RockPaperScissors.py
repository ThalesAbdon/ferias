import random


def jogar_pedra_papel_tesoura():
    options = ["Pedra", "Papel", "Tesoura"]

    while True:
        jogador_escolha = input("Escolha entre: Pedra, Papel ou Tesoura!\n")

        if jogador_escolha == "Sair":
            print("Jogo encerrado.")
            break

        if jogador_escolha not in options:
            print("Escolha inválida! Por favor, escolha entre: Pedra, Papel ou Tesoura")
            continue

        computador_escolha = random.choice(options)
        print(f"O computador escolheu: {computador_escolha}")

        if jogador_escolha == computador_escolha:
            print("Empate!")
        elif (
            (jogador_escolha == "Pedra" and computador_escolha == "Tesoura") or
            (jogador_escolha == "Tesoura" and computador_escolha == "Papel") or
                (jogador_escolha == "Papel" and computador_escolha == "Pedra")):
            print("Parabéns, você venceu!")
        else:
            print("O computador venceu!")


jogar_pedra_papel_tesoura()
