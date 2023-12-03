import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToTaskTemplatesCreateWithoutPersonInputSchema } from './PersonsToTaskTemplatesCreateWithoutPersonInputSchema';
import { PersonsToTaskTemplatesUncheckedCreateWithoutPersonInputSchema } from './PersonsToTaskTemplatesUncheckedCreateWithoutPersonInputSchema';
import { PersonsToTaskTemplatesCreateOrConnectWithoutPersonInputSchema } from './PersonsToTaskTemplatesCreateOrConnectWithoutPersonInputSchema';
import { PersonsToTaskTemplatesCreateManyPersonInputEnvelopeSchema } from './PersonsToTaskTemplatesCreateManyPersonInputEnvelopeSchema';
import { PersonsToTaskTemplatesWhereUniqueInputSchema } from './PersonsToTaskTemplatesWhereUniqueInputSchema';

export const PersonsToTaskTemplatesCreateNestedManyWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesCreateNestedManyWithoutPersonInput> = z.object({
  create: z.union([ z.lazy(() => PersonsToTaskTemplatesCreateWithoutPersonInputSchema),z.lazy(() => PersonsToTaskTemplatesCreateWithoutPersonInputSchema).array(),z.lazy(() => PersonsToTaskTemplatesUncheckedCreateWithoutPersonInputSchema),z.lazy(() => PersonsToTaskTemplatesUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PersonsToTaskTemplatesCreateOrConnectWithoutPersonInputSchema),z.lazy(() => PersonsToTaskTemplatesCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PersonsToTaskTemplatesCreateManyPersonInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PersonsToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => PersonsToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PersonsToTaskTemplatesCreateNestedManyWithoutPersonInputSchema;
