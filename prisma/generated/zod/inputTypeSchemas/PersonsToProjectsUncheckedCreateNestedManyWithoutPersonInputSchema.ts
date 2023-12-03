import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToProjectsCreateWithoutPersonInputSchema } from './PersonsToProjectsCreateWithoutPersonInputSchema';
import { PersonsToProjectsUncheckedCreateWithoutPersonInputSchema } from './PersonsToProjectsUncheckedCreateWithoutPersonInputSchema';
import { PersonsToProjectsCreateOrConnectWithoutPersonInputSchema } from './PersonsToProjectsCreateOrConnectWithoutPersonInputSchema';
import { PersonsToProjectsCreateManyPersonInputEnvelopeSchema } from './PersonsToProjectsCreateManyPersonInputEnvelopeSchema';
import { PersonsToProjectsWhereUniqueInputSchema } from './PersonsToProjectsWhereUniqueInputSchema';

export const PersonsToProjectsUncheckedCreateNestedManyWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToProjectsUncheckedCreateNestedManyWithoutPersonInput> = z.object({
  create: z.union([ z.lazy(() => PersonsToProjectsCreateWithoutPersonInputSchema),z.lazy(() => PersonsToProjectsCreateWithoutPersonInputSchema).array(),z.lazy(() => PersonsToProjectsUncheckedCreateWithoutPersonInputSchema),z.lazy(() => PersonsToProjectsUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PersonsToProjectsCreateOrConnectWithoutPersonInputSchema),z.lazy(() => PersonsToProjectsCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PersonsToProjectsCreateManyPersonInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PersonsToProjectsWhereUniqueInputSchema),z.lazy(() => PersonsToProjectsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PersonsToProjectsUncheckedCreateNestedManyWithoutPersonInputSchema;
