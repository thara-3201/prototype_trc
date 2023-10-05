import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerUpdatepwd = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Updatepwd, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly oldpassword: string;
  readonly newpassword: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUpdatepwd = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Updatepwd, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly oldpassword: string;
  readonly newpassword: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Updatepwd = LazyLoading extends LazyLoadingDisabled ? EagerUpdatepwd : LazyUpdatepwd

export declare const Updatepwd: (new (init: ModelInit<Updatepwd>) => Updatepwd) & {
  copyOf(source: Updatepwd, mutator: (draft: MutableModel<Updatepwd>) => MutableModel<Updatepwd> | void): Updatepwd;
}

type EagerEntity2 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Entity2, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly newpassword: string;
  readonly retypepassword: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEntity2 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Entity2, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly newpassword: string;
  readonly retypepassword: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Entity2 = LazyLoading extends LazyLoadingDisabled ? EagerEntity2 : LazyEntity2

export declare const Entity2: (new (init: ModelInit<Entity2>) => Entity2) & {
  copyOf(source: Entity2, mutator: (draft: MutableModel<Entity2>) => MutableModel<Entity2> | void): Entity2;
}

type EagerLogin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Login, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly password: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLogin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Login, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly password: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Login = LazyLoading extends LazyLoadingDisabled ? EagerLogin : LazyLogin

export declare const Login: (new (init: ModelInit<Login>) => Login) & {
  copyOf(source: Login, mutator: (draft: MutableModel<Login>) => MutableModel<Login> | void): Login;
}