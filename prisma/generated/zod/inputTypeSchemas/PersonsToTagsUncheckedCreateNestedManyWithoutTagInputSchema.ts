import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToTagsCreateWithoutTagInputSchema } from './PersonsToTagsCreateWithoutTagInputSchema';
import { PersonsToTagsUncheckedCreateWithoutTagInputSchema } from './PersonsToTagsUncheckedCreateWithoutTagInputSchema';
import { PersonsToTagsCreateOrConnectWithoutTagInputSchema } from './PersonsToTagsCreateOrConnectWithoutTagInputSchema';
import { PersonsToTagsCreateManyTagInputEnvelopeSchema } from './PersonsToTagsCreateManyTagInputEnvelopeSchema';
import { PersonsToTagsWhereUniqueInputSchema } from './PersonsToTagsWhereUniqueInputSchema';

export const PersonsToTagsUncheckedCreateNestedManyWithoutTagInputSchema: z.ZodType<Prisma.PersonsToTagsUncheckedCreateNestedManyWithoutTagInput> = z.object({
  create: z.union([ z.lazy(() => PersonsToTagsCreateWithoutTagInputSchema),z.lazy(() => PersonsToTagsCreateWithoutTagInputSchema).array(),z.lazy(() => PersonsToTagsUncheckedCreateWithoutTagInputSchema),z.lazy(() => PersonsToTagsUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PersonsToTagsCreateOrConnectWithoutTagInputSchema),z.lazy(() => PersonsToTagsCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PersonsToTagsCreateManyTagInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PersonsToTagsWhereUniqueInputSchema),z.lazy(() => PersonsToTagsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PersonsToTagsUncheckedCreateNestedManyWithoutTagInputSchema;
