import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToTaskTemplatesCreateWithoutTaskInputSchema } from './PrivateTagsToTaskTemplatesCreateWithoutTaskInputSchema';
import { PrivateTagsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema } from './PrivateTagsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema';
import { PrivateTagsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema } from './PrivateTagsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema';
import { PrivateTagsToTaskTemplatesCreateManyTaskInputEnvelopeSchema } from './PrivateTagsToTaskTemplatesCreateManyTaskInputEnvelopeSchema';
import { PrivateTagsToTaskTemplatesWhereUniqueInputSchema } from './PrivateTagsToTaskTemplatesWhereUniqueInputSchema';

export const PrivateTagsToTaskTemplatesUncheckedCreateNestedManyWithoutTaskInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesUncheckedCreateNestedManyWithoutTaskInput> = z.object({
  create: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesCreateWithoutTaskInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesCreateWithoutTaskInputSchema).array(),z.lazy(() => PrivateTagsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateTagsToTaskTemplatesCreateManyTaskInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrivateTagsToTaskTemplatesUncheckedCreateNestedManyWithoutTaskInputSchema;
