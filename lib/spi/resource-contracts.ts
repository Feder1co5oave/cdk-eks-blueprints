import { IResource } from 'aws-cdk-lib';
import { ResourceContext } from './types';

/** 
 * Generic resource provider interface. 
 **/
 export declare interface ResourceProvider<T extends IResource = IResource> {
    provide(context: ResourceContext): T;
}
