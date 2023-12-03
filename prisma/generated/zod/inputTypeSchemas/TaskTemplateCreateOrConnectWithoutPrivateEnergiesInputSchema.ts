import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateWhereUniqueInputSchema } from './TaskTemplateWhereUniqueInputSchema';
import { TaskTemplateCreateWithoutPrivateEnergiesInputSchema } from './TaskTemplateCreateWithoutPrivateEnergiesInputSchema';
import { TaskTemplateUncheckedCreateWithoutPrivateEnergiesInputSchema } from './TaskTemplateUncheckedCreateWithoutPrivateEnergiesInputSchema';

export const TaskTemplateCreateOrConnectWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.TaskTemplateCreateOrConnectWithoutPrivateEnergiesInput> = z.object({
  where: z.lazy(() => TaskTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaskTemplateCreateWithoutPrivateEnergiesInputSchema),z.lazy(() => TaskTemplateUncheckedCreateWithoutPrivateEnergiesInputSchema) ]),
}).strict();

export default TaskTemplateCreateOrConnectWithoutPrivateEnergiesInputSchema;
