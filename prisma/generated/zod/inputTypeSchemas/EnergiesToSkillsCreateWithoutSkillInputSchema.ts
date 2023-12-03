import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyCreateNestedOneWithoutSkillsInputSchema } from './EnergyCreateNestedOneWithoutSkillsInputSchema';

export const EnergiesToSkillsCreateWithoutSkillInputSchema: z.ZodType<Prisma.EnergiesToSkillsCreateWithoutSkillInput> = z.object({
  notes: z.string().optional().nullable(),
  energy: z.lazy(() => EnergyCreateNestedOneWithoutSkillsInputSchema)
}).strict();

export default EnergiesToSkillsCreateWithoutSkillInputSchema;
