import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToTaskTemplatesCreateWithoutTagInputSchema } from './PrivateTagsToTaskTemplatesCreateWithoutTagInputSchema';
import { PrivateTagsToTaskTemplatesUncheckedCreateWithoutTagInputSchema } from './PrivateTagsToTaskTemplatesUncheckedCreateWithoutTagInputSchema';
import { PrivateTagsToTaskTemplatesCreateOrConnectWithoutTagInputSchema } from './PrivateTagsToTaskTemplatesCreateOrConnectWithoutTagInputSchema';
import { PrivateTagsToTaskTemplatesCreateManyTagInputEnvelopeSchema } from './PrivateTagsToTaskTemplatesCreateManyTagInputEnvelopeSchema';
import { PrivateTagsToTaskTemplatesWhereUniqueInputSchema } from './PrivateTagsToTaskTemplatesWhereUniqueInputSchema';

export const PrivateTagsToTaskTemplatesCreateNestedManyWithoutTagInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesCreateNestedManyWithoutTagInput> = z.object({
  create: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesCreateWithoutTagInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesCreateWithoutTagInputSchema).array(),z.lazy(() => PrivateTagsToTaskTemplatesUncheckedCreateWithoutTagInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesCreateOrConnectWithoutTagInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateTagsToTaskTemplatesCreateManyTagInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrivateTagsToTaskTemplatesCreateNestedManyWithoutTagInputSchema;
