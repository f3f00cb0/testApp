<?php

namespace App\Repository;

use App\Entity\UsersSongs;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method UsersSongs|null find($id, $lockMode = null, $lockVersion = null)
 * @method UsersSongs|null findOneBy(array $criteria, array $orderBy = null)
 * @method UsersSongs[]    findAll()
 * @method UsersSongs[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UsersSongsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UsersSongs::class);
    }

    // /**
    //  * @return UsersSongs[] Returns an array of UsersSongs objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('u.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?UsersSongs
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
