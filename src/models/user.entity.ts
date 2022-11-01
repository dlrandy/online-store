import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;
  public getId(): number {
    return this.id;
  }
  public setId(value: number) {
    this.id = value;
  }

  @Column()
  public name: string;
  public getName(): string {
    return this.name;
  }
  public setName(value: string) {
    this.name = value;
  }
  @Column({ unique: true })
  public email: string;
  public getEmail(): string {
    return this.email;
  }
  public setEmail(value: string) {
    this.email = value;
  }
  @Column()
  public password: string;
  public getPassword(): string {
    return this.password;
  }
  public setPassword(value: string) {
    this.password = value;
  }
  @Column()
  public role: string;
  public getRole(): string {
    return this.role;
  }
  public setRole(value: string) {
    this.role = value;
  }
  @Column()
  public balance: number;
  public getBalance(): number {
    return this.balance;
  }
  public setBalance(value: number) {
    this.balance = value;
  }
}
