import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyCreateWithoutSkillsInputSchema } from './EnergyCreateWithoutSkillsInputSchema';
import { EnergyUncheckedCreateWithoutSkillsInputSchema } from './EnergyUncheckedCreateWithoutSkillsInputSchema';
import { EnergyCreateOrConnectWithoutSkillsInputSchema } from './EnergyCreateOrConnectWithoutSkillsInputSchema';
import { EnergyUpsertWithoutSkillsInputSchema } from './EnergyUpsertWithoutSkillsInputSchema';
import { EnergyWhereUniqueInputSchema } from './EnergyWhereUniqueInputSchema';
import { EnergyUpdateToOneWithWhereWithoutSkillsInputSchema } from './EnergyUpdateToOneWithWhereWithoutSkillsInputSchema';
import { EnergyUpdateWithoutSkillsInputSchema } from './EnergyUpdateWithoutSkillsInputSchema';
import { EnergyUncheckedUpdateWithoutSkillsInputSchema } from './EnergyUncheckedUpdateWithoutSkillsInputSchema';

export const EnergyUpdateOneRequiredWithoutSkillsNestedInputSchema: z.ZodType<Prisma.EnergyUpdateOneRequiredWithoutSkillsNestedInput> = z.object({
  create: z.union([ z.lazy(() => EnergyCreateWithoutSkillsInputSchema),z.lazy(() => EnergyUncheckedCreateWithoutSkillsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EnergyCreateOrConnectWithoutSkillsInputSchema).optional(),
  upsert: z.lazy(() => EnergyUpsertWithoutSkillsInputSchema).optional(),
  connect: z.lazy(() => EnergyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => EnergyUpdateToOneWithWhereWithoutSkillsInputSchema),z.lazy(() => EnergyUpdateWithoutSkillsInputSchema),z.lazy(() => EnergyUncheckedUpdateWithoutSkillsInputSchema) ]).optional(),
}).strict();

export default EnergyUpdateOneRequiredWithoutSkillsNestedInputSchema;
