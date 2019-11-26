namespace empresa{
    export class Banco{
        private _nome:string;
        private _codBanco:number;
        private _clientes:Array<Cliente> = [];
        private _funcionarios:Array<Funcionario> = [];

        public getNome(){
            return this._nome;
        }

        public setNome(nome:string){
            this._nome = nome;
        }

        public getCodBanco(){
            return this._codBanco;
        }

        public setCodBanco(codigo:number){
            this._codBanco = codigo;
        }

        public getClientes(){
            return this._clientes;
        }

        public addCLiente(cliente:Cliente){
            this._clientes.push(cliente);
        }

    }
}