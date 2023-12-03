import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityCreateWithoutSkillPathsInputSchema } from './PriorityCreateWithoutSkillPathsInputSchema';
import { PriorityUncheckedCreateWithoutSkillPathsInputSchema } from './PriorityUncheckedCreateWithoutSkillPathsInputSchema';
import { PriorityCreateOrConnectWithoutSkillPathsInputSchema } from './PriorityCreateOrConnectWithoutSkillPathsInputSchema';
import { PriorityUpsertWithoutSkillPathsInputSchema } from './PriorityUpsertWithoutSkillPathsInputSchema';
import { PriorityWhereUniqueInputSchema } from './PriorityWhereUniqueInputSchema';
import { PriorityUpdateToOneWithWhereWithoutSkillPathsInputSchema } from './PriorityUpdateToOneWithWhereWithoutSkillPathsInputSchema';
import { PriorityUpdateWithoutSkillPathsInputSchema } from './PriorityUpdateWithoutSkillPathsInputSchema';
import { PriorityUncheckedUpdateWithoutSkillPathsInputSchema } from './PriorityUncheckedUpdateWithoutSkillPathsInputSchema';

export const PriorityUpdateOneRequiredWithoutSkillPathsNestedInputSchema: z.ZodType<Prisma.PriorityUpdateOneRequiredWithoutSkillPathsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PriorityCreateWithoutSkillPathsInputSchema),z.lazy(() => PriorityUncheckedCreateWithoutSkillPathsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PriorityCreateOrConnectWithoutSkillPathsInputSchema).optional(),
  upsert: z.lazy(() => PriorityUpsertWithoutSkillPathsInputSchema).optional(),
  connect: z.lazy(() => PriorityWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PriorityUpdateToOneWithWhereWithoutSkillPathsInputSchema),z.lazy(() => PriorityUpdateWithoutSkillPathsInputSchema),z.lazy(() => PriorityUncheckedUpdateWithoutSkillPathsInputSchema) ]).optional(),
}).strict();

export default PriorityUpdateOneRequiredWithoutSkillPathsNestedInputSchema;
