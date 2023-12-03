import { z } from 'zod';
import { DecimalJSLikeSchema } from '../inputTypeSchemas/DecimalJsLikeSchema'
import { isValidDecimalInput } from '../inputTypeSchemas/isValidDecimalInput'

/////////////////////////////////////////
// ENERGY MEASUREMENT SCHEMA
/////////////////////////////////////////

/**
 * Snapshot of one kind of a person's energy at a particular time.
 */
export const EnergyMeasurementSchema = z.object({
  id: z.number().int(),
  date: z.coerce.date(),
  measurement: z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: "Field 'measurement' must be a Decimal. Location: ['Models', 'EnergyMeasurement']",  }),
  personId: z.number().int(),
  energyId: z.number().int(),
})

export type EnergyMeasurement = z.infer<typeof EnergyMeasurementSchema>

export default EnergyMeasurementSchema;
