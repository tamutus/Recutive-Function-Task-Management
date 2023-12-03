import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyWhereUniqueInputSchema } from './EnergyWhereUniqueInputSchema';
import { EnergyCreateWithoutSkillsInputSchema } from './EnergyCreateWithoutSkillsInputSchema';
import { EnergyUncheckedCreateWithoutSkillsInputSchema } from './EnergyUncheckedCreateWithoutSkillsInputSchema';

export const EnergyCreateOrConnectWithoutSkillsInputSchema: z.ZodType<Prisma.EnergyCreateOrConnectWithoutSkillsInput> = z.object({
  where: z.lazy(() => EnergyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EnergyCreateWithoutSkillsInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutSkillsInputSchema) ]),
}).strict();

export default EnergyCreateOrConnectWithoutSkillsInputSchema;
