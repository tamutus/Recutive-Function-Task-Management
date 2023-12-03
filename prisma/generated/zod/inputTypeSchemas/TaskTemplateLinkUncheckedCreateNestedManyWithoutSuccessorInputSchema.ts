import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateLinkCreateWithoutSuccessorInputSchema } from './TaskTemplateLinkCreateWithoutSuccessorInputSchema';
import { TaskTemplateLinkUncheckedCreateWithoutSuccessorInputSchema } from './TaskTemplateLinkUncheckedCreateWithoutSuccessorInputSchema';
import { TaskTemplateLinkCreateOrConnectWithoutSuccessorInputSchema } from './TaskTemplateLinkCreateOrConnectWithoutSuccessorInputSchema';
import { TaskTemplateLinkCreateManySuccessorInputEnvelopeSchema } from './TaskTemplateLinkCreateManySuccessorInputEnvelopeSchema';
import { TaskTemplateLinkWhereUniqueInputSchema } from './TaskTemplateLinkWhereUniqueInputSchema';

export const TaskTemplateLinkUncheckedCreateNestedManyWithoutSuccessorInputSchema: z.ZodType<Prisma.TaskTemplateLinkUncheckedCreateNestedManyWithoutSuccessorInput> = z.object({
  create: z.union([ z.lazy(() => TaskTemplateLinkCreateWithoutSuccessorInputSchema),z.lazy(() => TaskTemplateLinkCreateWithoutSuccessorInputSchema).array(),z.lazy(() => TaskTemplateLinkUncheckedCreateWithoutSuccessorInputSchema),z.lazy(() => TaskTemplateLinkUncheckedCreateWithoutSuccessorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TaskTemplateLinkCreateOrConnectWithoutSuccessorInputSchema),z.lazy(() => TaskTemplateLinkCreateOrConnectWithoutSuccessorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TaskTemplateLinkCreateManySuccessorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TaskTemplateLinkWhereUniqueInputSchema),z.lazy(() => TaskTemplateLinkWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TaskTemplateLinkUncheckedCreateNestedManyWithoutSuccessorInputSchema;
