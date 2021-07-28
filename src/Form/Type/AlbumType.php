<?php

namespace App\Form\Type;

use App\Entity\Album;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class AlbumType extends  AbstractType
{
    public function buildForm(FormBuilderInterface $builder, $options)
    {
        $builder
            ->add('title', TextType::class)
            ->add('artiste', TextType::class)
            ->add('cover', FileType::class, [
                'label' => 'couverture',
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new File([
                        'maxSize' => '1024k',
                    ])
                ],
            ])
            ->add('save', SubmitType::class, [
                'label' => 'Créer Album'
                ])
        ;    
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Album::class,
        ]);
    }
}