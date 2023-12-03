import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToProjectTemplatesCreateWithoutPersonInputSchema } from './PersonsToProjectTemplatesCreateWithoutPersonInputSchema';
import { PersonsToProjectTemplatesUncheckedCreateWithoutPersonInputSchema } from './PersonsToProjectTemplatesUncheckedCreateWithoutPersonInputSchema';
import { PersonsToProjectTemplatesCreateOrConnectWithoutPersonInputSchema } from './PersonsToProjectTemplatesCreateOrConnectWithoutPersonInputSchema';
import { PersonsToProjectTemplatesCreateManyPersonInputEnvelopeSchema } from './PersonsToProjectTemplatesCreateManyPersonInputEnvelopeSchema';
import { PersonsToProjectTemplatesWhereUniqueInputSchema } from './PersonsToProjectTemplatesWhereUniqueInputSchema';

export const PersonsToProjectTemplatesUncheckedCreateNestedManyWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToProjectTemplatesUncheckedCreateNestedManyWithoutPersonInput> = z.object({
  create: z.union([ z.lazy(() => PersonsToProjectTemplatesCreateWithoutPersonInputSchema),z.lazy(() => PersonsToProjectTemplatesCreateWithoutPersonInputSchema).array(),z.lazy(() => PersonsToProjectTemplatesUncheckedCreateWithoutPersonInputSchema),z.lazy(() => PersonsToProjectTemplatesUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PersonsToProjectTemplatesCreateOrConnectWithoutPersonInputSchema),z.lazy(() => PersonsToProjectTemplatesCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PersonsToProjectTemplatesCreateManyPersonInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PersonsToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => PersonsToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PersonsToProjectTemplatesUncheckedCreateNestedManyWithoutPersonInputSchema;
