import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyCreateWithoutSkillsInputSchema } from './EnergyCreateWithoutSkillsInputSchema';
import { EnergyUncheckedCreateWithoutSkillsInputSchema } from './EnergyUncheckedCreateWithoutSkillsInputSchema';
import { EnergyCreateOrConnectWithoutSkillsInputSchema } from './EnergyCreateOrConnectWithoutSkillsInputSchema';
import { EnergyWhereUniqueInputSchema } from './EnergyWhereUniqueInputSchema';

export const EnergyCreateNestedOneWithoutSkillsInputSchema: z.ZodType<Prisma.EnergyCreateNestedOneWithoutSkillsInput> = z.object({
  create: z.union([ z.lazy(() => EnergyCreateWithoutSkillsInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutSkillsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EnergyCreateOrConnectWithoutSkillsInputSchema).optional(),
  connect: z.lazy(() => EnergyWhereUniqueInputSchema).optional()
}).strict();

export default EnergyCreateNestedOneWithoutSkillsInputSchema;
