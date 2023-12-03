import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToTagsCreateWithoutFollowerInputSchema } from './PersonsToTagsCreateWithoutFollowerInputSchema';
import { PersonsToTagsUncheckedCreateWithoutFollowerInputSchema } from './PersonsToTagsUncheckedCreateWithoutFollowerInputSchema';
import { PersonsToTagsCreateOrConnectWithoutFollowerInputSchema } from './PersonsToTagsCreateOrConnectWithoutFollowerInputSchema';
import { PersonsToTagsCreateManyFollowerInputEnvelopeSchema } from './PersonsToTagsCreateManyFollowerInputEnvelopeSchema';
import { PersonsToTagsWhereUniqueInputSchema } from './PersonsToTagsWhereUniqueInputSchema';

export const PersonsToTagsUncheckedCreateNestedManyWithoutFollowerInputSchema: z.ZodType<Prisma.PersonsToTagsUncheckedCreateNestedManyWithoutFollowerInput> = z.object({
  create: z.union([ z.lazy(() => PersonsToTagsCreateWithoutFollowerInputSchema),z.lazy(() => PersonsToTagsCreateWithoutFollowerInputSchema).array(),z.lazy(() => PersonsToTagsUncheckedCreateWithoutFollowerInputSchema),z.lazy(() => PersonsToTagsUncheckedCreateWithoutFollowerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PersonsToTagsCreateOrConnectWithoutFollowerInputSchema),z.lazy(() => PersonsToTagsCreateOrConnectWithoutFollowerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PersonsToTagsCreateManyFollowerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PersonsToTagsWhereUniqueInputSchema),z.lazy(() => PersonsToTagsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PersonsToTagsUncheckedCreateNestedManyWithoutFollowerInputSchema;
