import { z } from 'zod';
import { DecimalJSLikeSchema } from '../inputTypeSchemas/DecimalJsLikeSchema'
import { isValidDecimalInput } from '../inputTypeSchemas/isValidDecimalInput'

/////////////////////////////////////////
// ENERGIES TO TASK WORKS SCHEMA
/////////////////////////////////////////

/**
 * Join table to store energy measurements about each task, by chunk of work done.
 */
export const EnergiesToTaskWorksSchema = z.object({
  energyId: z.number().int(),
  workId: z.number().int(),
  startingValue: z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: "Field 'startingValue' must be a Decimal. Location: ['Models', 'EnergiesToTaskWorks']",  }),
  endingValue: z.union([z.number(),z.string(),DecimalJSLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: "Field 'endingValue' must be a Decimal. Location: ['Models', 'EnergiesToTaskWorks']",  }),
})

export type EnergiesToTaskWorks = z.infer<typeof EnergiesToTaskWorksSchema>

export default EnergiesToTaskWorksSchema;
