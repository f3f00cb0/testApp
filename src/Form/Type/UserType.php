<?php


namespace App\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('username', TextType::class, [
              'label' => 'Nom d\'utilisateur',
              'attr' => [
                'class' => 'input'
              ]
            ])
            ->add('password', PasswordType::class, [
              'label' => 'Mot de passe',
              'attr' => [
                'class' => 'input'
              ]
            ])
        ;
    }
}