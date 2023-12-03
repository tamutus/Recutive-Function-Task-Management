import { z } from 'zod';

export const EnergyMeasurementScalarFieldEnumSchema = z.enum(['id','date','measurement','personId','energyId']);

export default EnergyMeasurementScalarFieldEnumSchema;
