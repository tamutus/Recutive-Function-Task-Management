import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyUpdateWithoutSkillsInputSchema } from './EnergyUpdateWithoutSkillsInputSchema';
import { EnergyUncheckedUpdateWithoutSkillsInputSchema } from './EnergyUncheckedUpdateWithoutSkillsInputSchema';
import { EnergyCreateWithoutSkillsInputSchema } from './EnergyCreateWithoutSkillsInputSchema';
import { EnergyUncheckedCreateWithoutSkillsInputSchema } from './EnergyUncheckedCreateWithoutSkillsInputSchema';
import { EnergyWhereInputSchema } from './EnergyWhereInputSchema';

export const EnergyUpsertWithoutSkillsInputSchema: z.ZodType<Prisma.EnergyUpsertWithoutSkillsInput> = z.object({
  update: z.union([ z.lazy(() => EnergyUpdateWithoutSkillsInputSchema),z.lazy(() => EnergyUncheckedUpdateWithoutSkillsInputSchema) ]),
  create: z.union([ z.lazy(() => EnergyCreateWithoutSkillsInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutSkillsInputSchema) ]),
  where: z.lazy(() => EnergyWhereInputSchema).optional()
}).strict();

export default EnergyUpsertWithoutSkillsInputSchema;
