import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyUpdateWithoutSkillsInputSchema } from './PrivateEnergyUpdateWithoutSkillsInputSchema';
import { PrivateEnergyUncheckedUpdateWithoutSkillsInputSchema } from './PrivateEnergyUncheckedUpdateWithoutSkillsInputSchema';
import { PrivateEnergyCreateWithoutSkillsInputSchema } from './PrivateEnergyCreateWithoutSkillsInputSchema';
import { PrivateEnergyUncheckedCreateWithoutSkillsInputSchema } from './PrivateEnergyUncheckedCreateWithoutSkillsInputSchema';
import { PrivateEnergyWhereInputSchema } from './PrivateEnergyWhereInputSchema';

export const PrivateEnergyUpsertWithoutSkillsInputSchema: z.ZodType<Prisma.PrivateEnergyUpsertWithoutSkillsInput> = z.object({
  update: z.union([ z.lazy(() => PrivateEnergyUpdateWithoutSkillsInputSchema),z.lazy(() => PrivateEnergyUncheckedUpdateWithoutSkillsInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutSkillsInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutSkillsInputSchema) ]),
  where: z.lazy(() => PrivateEnergyWhereInputSchema).optional()
}).strict();

export default PrivateEnergyUpsertWithoutSkillsInputSchema;
