import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToPrivateTagsCreateWithoutTagInputSchema } from './PrioritiesToPrivateTagsCreateWithoutTagInputSchema';
import { PrioritiesToPrivateTagsUncheckedCreateWithoutTagInputSchema } from './PrioritiesToPrivateTagsUncheckedCreateWithoutTagInputSchema';
import { PrioritiesToPrivateTagsCreateOrConnectWithoutTagInputSchema } from './PrioritiesToPrivateTagsCreateOrConnectWithoutTagInputSchema';
import { PrioritiesToPrivateTagsCreateManyTagInputEnvelopeSchema } from './PrioritiesToPrivateTagsCreateManyTagInputEnvelopeSchema';
import { PrioritiesToPrivateTagsWhereUniqueInputSchema } from './PrioritiesToPrivateTagsWhereUniqueInputSchema';

export const PrioritiesToPrivateTagsCreateNestedManyWithoutTagInputSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsCreateNestedManyWithoutTagInput> = z.object({
  create: z.union([ z.lazy(() => PrioritiesToPrivateTagsCreateWithoutTagInputSchema),z.lazy(() => PrioritiesToPrivateTagsCreateWithoutTagInputSchema).array(),z.lazy(() => PrioritiesToPrivateTagsUncheckedCreateWithoutTagInputSchema),z.lazy(() => PrioritiesToPrivateTagsUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrioritiesToPrivateTagsCreateOrConnectWithoutTagInputSchema),z.lazy(() => PrioritiesToPrivateTagsCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrioritiesToPrivateTagsCreateManyTagInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrioritiesToPrivateTagsWhereUniqueInputSchema),z.lazy(() => PrioritiesToPrivateTagsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrioritiesToPrivateTagsCreateNestedManyWithoutTagInputSchema;
