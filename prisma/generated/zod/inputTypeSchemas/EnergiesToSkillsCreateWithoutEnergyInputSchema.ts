import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillCreateNestedOneWithoutEnergiesInputSchema } from './SkillCreateNestedOneWithoutEnergiesInputSchema';

export const EnergiesToSkillsCreateWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToSkillsCreateWithoutEnergyInput> = z.object({
  notes: z.string().optional().nullable(),
  skill: z.lazy(() => SkillCreateNestedOneWithoutEnergiesInputSchema)
}).strict();

export default EnergiesToSkillsCreateWithoutEnergyInputSchema;
