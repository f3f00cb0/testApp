<?php

namespace App\Entity;

use App\Repository\TitreRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TitreRepository::class)
 */
class Titre
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nom;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $path;

    /**
     * @ORM\Column(type="integer")
     */
    private $album;

    /**
     * @ORM\Column(type="integer")
     */
    private $artiste;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getPath(): ?string
    {
        return $this->path;
    }

    public function setPath(string $path): self
    {
        $this->path = $path;

        return $this;
    }

    public function getAlbum(): ?int
    {
        return $this->album;
    }

    public function setAlbum(int $album): self
    {
        $this->album = $album;

        return $this;
    }

    public function getArtiste(): ?int
    {
        return $this->artiste;
    }

    public function setArtiste(int $artiste): self
    {
        $this->artiste = $artiste;

        return $this;
    }
}
