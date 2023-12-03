import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityCreateWithoutSkillsInputSchema } from './PriorityCreateWithoutSkillsInputSchema';
import { PriorityUncheckedCreateWithoutSkillsInputSchema } from './PriorityUncheckedCreateWithoutSkillsInputSchema';
import { PriorityCreateOrConnectWithoutSkillsInputSchema } from './PriorityCreateOrConnectWithoutSkillsInputSchema';
import { PriorityUpsertWithoutSkillsInputSchema } from './PriorityUpsertWithoutSkillsInputSchema';
import { PriorityWhereUniqueInputSchema } from './PriorityWhereUniqueInputSchema';
import { PriorityUpdateToOneWithWhereWithoutSkillsInputSchema } from './PriorityUpdateToOneWithWhereWithoutSkillsInputSchema';
import { PriorityUpdateWithoutSkillsInputSchema } from './PriorityUpdateWithoutSkillsInputSchema';
import { PriorityUncheckedUpdateWithoutSkillsInputSchema } from './PriorityUncheckedUpdateWithoutSkillsInputSchema';

export const PriorityUpdateOneRequiredWithoutSkillsNestedInputSchema: z.ZodType<Prisma.PriorityUpdateOneRequiredWithoutSkillsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PriorityCreateWithoutSkillsInputSchema),z.lazy(() => PriorityUncheckedCreateWithoutSkillsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PriorityCreateOrConnectWithoutSkillsInputSchema).optional(),
  upsert: z.lazy(() => PriorityUpsertWithoutSkillsInputSchema).optional(),
  connect: z.lazy(() => PriorityWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PriorityUpdateToOneWithWhereWithoutSkillsInputSchema),z.lazy(() => PriorityUpdateWithoutSkillsInputSchema),z.lazy(() => PriorityUncheckedUpdateWithoutSkillsInputSchema) ]).optional(),
}).strict();

export default PriorityUpdateOneRequiredWithoutSkillsNestedInputSchema;
