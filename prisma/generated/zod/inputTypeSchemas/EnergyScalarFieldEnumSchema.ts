import { z } from 'zod';

export const EnergyScalarFieldEnumSchema = z.enum(['id','name','unit','info','color','music']);

export default EnergyScalarFieldEnumSchema;
