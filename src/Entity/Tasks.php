<?php


namespace App\Entity;


class Tasks
{
    protected $name;
    protected $allowedTime;
    protected $startingAt;
    protected $endingAt;

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName($name): void
    {
        $this->name = $name;
    }

    /**
     * @return mixed
     */
    public function getAllowedTime()
    {
        return $this->allowedTime;
    }

    /**
     * @param mixed $allowedTime
     */
    public function setAllowedTime($allowedTime): void
    {
        $this->allowedTime = $allowedTime;
    }

    /**
     * @return mixed
     */
    public function getStartingAt()
    {
        return $this->startingAt;
    }

    /**
     * @param mixed $startingAt
     */
    public function setStartingAt($startingAt): void
    {
        $this->startingAt = $startingAt;
    }

    /**
     * @return mixed
     */
    public function getEndingAt()
    {
        return $this->endingAt;
    }

    /**
     * @param mixed $endingAt
     */
    public function setEndingAt(): void
    {
        $endingAt = $this->startingAt + $this->allowedTime;
        $this->endingAt = $endingAt;
    }

}