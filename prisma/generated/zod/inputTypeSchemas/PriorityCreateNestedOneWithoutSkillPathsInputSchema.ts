import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityCreateWithoutSkillPathsInputSchema } from './PriorityCreateWithoutSkillPathsInputSchema';
import { PriorityUncheckedCreateWithoutSkillPathsInputSchema } from './PriorityUncheckedCreateWithoutSkillPathsInputSchema';
import { PriorityCreateOrConnectWithoutSkillPathsInputSchema } from './PriorityCreateOrConnectWithoutSkillPathsInputSchema';
import { PriorityWhereUniqueInputSchema } from './PriorityWhereUniqueInputSchema';

export const PriorityCreateNestedOneWithoutSkillPathsInputSchema: z.ZodType<Prisma.PriorityCreateNestedOneWithoutSkillPathsInput> = z.object({
  create: z.union([ z.lazy(() => PriorityCreateWithoutSkillPathsInputSchema),z.lazy(() => PriorityUncheckedCreateWithoutSkillPathsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PriorityCreateOrConnectWithoutSkillPathsInputSchema).optional(),
  connect: z.lazy(() => PriorityWhereUniqueInputSchema).optional()
}).strict();

export default PriorityCreateNestedOneWithoutSkillPathsInputSchema;
